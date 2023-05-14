import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Button from "../components/Button";
import Toast from "../components/Toast";
import CardItem from "../components/CardItem";
import ModalAdd from "../components/ModalAdd";
import ModalEdit from "../components/ModalEdit";
import ModalDelete from "../components/ModalDeleteListItem";
import DropdownSort from "../components/DropdownSort";
import PlusIcon from "../assets/icons/icon-plus.svg";
import EditIcon from "../assets/icons/icon-edit-h.svg";
import BackIcon from "../assets/icons/icon-back.svg";
import EmptyItem from "../assets/images/empty-item.png";
import { sorting } from "../utils";
import useFetchTodo from "../hooks/useFetchTodo";
import config from "../api/base.js";

const sortList = () => {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const location = useLocation();
  const [isLoading, listTodo, getListTodo] = useFetchTodo(activityId);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [showModalToast, setShowModalToast] = useState(false);
  const [showModalToastEdit, setShowModalToastEdit] = useState(false);
  const [editActivityTitle, setEditActivityTitle] = useState(false);
  const [titleState, setTitleState] = useState(location?.state?.activityTitle);
  const [sortValue, setSortValue] = useState("");
  const [sortList, setSortList] = useState([]);
  const [todoData, setTodoData] = useState({
    title: "",
    id: "",
    priority: "",
  });

  const _handleFormChange = (target, value) => {
    setTodoData((prevState) => {
      return {
        ...prevState,
        [target]: value,
      };
    });
  };

  const _editActivityTitle = async () => {
    try {
      const response = await config.patch(`/activity-groups/${activityId}`, {
        title: titleState,
        priority: "high",
      });
      console.log(response, "responsse");
      setEditActivityTitle(false);
      setTitleState(titleState);
    } catch (error) {
      console.log(error);
    }
  };

  const _createTodo = async () => {
    try {
      const response = await config.post(`/todo-items`, {
        title: todoData?.title,
        activity_group_id: activityId,
        priority: todoData?.priority,
      });
      getListTodo();
      setShowModalAdd(false);
      setTodoData({});
    } catch (error) {
      console.log(error);
    }
  };

  const _editTodo = async (id) => {
    try {
      const response = await config.patch(`/todo-items/${id}`, {
        title: todoData?.title,
        priority: todoData?.priority,
      });
      console.log(response, "responsse");
      getListTodo();
      setShowModalEdit(false);
    } catch (error) {
      console.log(error);
      setShowModalToastEdit(true);
    }
  };

  const _editTodoStatus = async (id, status) => {
    try {
      const response = await config.patch(`/todo-items/${id}`, {
        is_active: status,
      });
      getListTodo();
      setShowModalEdit(false);
    } catch (error) {
      console.log(error);
      setShowModalToastEdit(true);
    }
  };

  const _deleteTodo = async (id) => {
    try {
      const response = await config.delete(`/todo-items/${id}`);
      getListTodo();
      setShowModalDelete(false);
      setShowModalToast(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(sortList, "sortlist");

  useEffect(() => {
    let sortedList = [...listTodo];

    if (sortValue === "a-z") {
      sortedList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "z-a") {
      sortedList.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortValue === "latest") {
      sortedList.sort((a, b) => b.id - a.id);
    } else if (sortValue === "oldest") {
      sortedList.sort((a, b) => a.id - b.id);
    }

    setSortList(sortedList);
  }, [listTodo, sortValue]);

  return (
    <section className="container max-w-[1000px] mx-auto">
      <div className="flex justify-between my-[3rem]">
        <div className="flex gap-5">
          <button onClick={() => navigate("/")}>
            <img src={BackIcon} alt="edit-icon" width={35} />
          </button>
          {editActivityTitle ? (
            <input
              type="text"
              onBlur={_editActivityTitle}
              onChange={(e) => setTitleState(e.target.value)}
              value={titleState}
              className="bg-transparent border-0 text-4xl font-bold max-w-[580px] border-b border-gray-300"
            />
          ) : (
            <h1 className="font-bold text-4xl flex items-center">
              {titleState}
            </h1>
          )}
          <button onClick={() => setEditActivityTitle(!editActivityTitle)}>
            <img src={EditIcon} alt="edit-icon" width={25} />
          </button>
        </div>
        <div className="flex gap-6">
          <DropdownSort
            options={sorting}
            isOpen={showSorting}
            setIsOpen={setShowSorting}
            setSortValue={setSortValue}
          />
          <Button
            color="primary"
            onClick={() => setShowModalAdd(true)}
            text="Tambah"
            icon={PlusIcon}
          />
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : sortList.length > 0 ? (
        <div data-cy="item-list">
          {sortList.map((item, i) => {
            return (
              <CardItem
                title={item?.title}
                key={i}
                id={item?.id}
                isActive={item?.is_active}
                priority={item?.priority}
                onClickDelete={() => setShowModalDelete(true)}
                onClickEdit={() => setShowModalEdit(true)}
                changeStatus={_editTodoStatus}
                setTodoData={() =>
                  setTodoData({
                    id: item?.id,
                    title: item?.title,
                    priority: item?.priority,
                  })
                }
              />
            );
          })}
        </div>
      ) : (
        <div
          onClick={() => setShowModalAdd(true)}
          className="flex justify-center"
          data-cy="item-list-empty-state"
        >
          <img src={EmptyItem} alt="empty-activity" />
        </div>
      )}

      <ModalAdd
        isOpen={showModalAdd}
        handleFormChange={_handleFormChange}
        onClose={() => {
          setTodoData({});
          setShowModalAdd(false);
        }}
        todoData={todoData}
        onConfirm={_createTodo}
      />

      <ModalEdit
        isOpen={showModalEdit}
        handleFormChange={_handleFormChange}
        onClose={() => {
          setTodoData({});
          setShowModalEdit(false);
        }}
        todoData={todoData}
        onConfirm={() => _editTodo(todoData?.id)}
      />

      <ModalDelete
        onClose={() => setShowModalDelete(false)}
        isOpen={showModalDelete}
        onConfirm={() => _deleteTodo(todoData?.id)}
        content={todoData?.title}
      />

      <Toast
        content={"Todo berhasil dihapus"}
        isOpen={showModalToast}
        onClose={() => setShowModalToast(false)}
      />
      <Toast
        content={"Gagal mengedit todo"}
        isOpen={showModalToastEdit}
        onClose={() => setShowModalToastEdit(false)}
      />
    </section>
  );
};

export default sortList;
