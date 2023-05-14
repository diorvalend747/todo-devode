import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../api/base.js";
import Button from "../components/Button";
import Toast from "../components/Toast";
import EmptyActivity from "../assets/images/empty-activity.png";
import CardActivity from "../components/CardActivity";
import ModalDelete from "../components/ModalDeleteActivity";
import PlusIcon from "../assets/icons/icon-plus.svg";
import useFetchActivity from "../hooks/useFetchActivity";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, activities, getActivities] = useFetchActivity();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalToast, setShowModalToast] = useState(false);
  const [activityData, setActivityData] = useState({
    title: "",
    id: "",
  });

  const _createActivity = async () => {
    try {
      const response = await config.post(`/activity-groups`, {
        title: "New activity",
        email: "dior@mail.com",
      });
      console.log(response);
      getActivities();
    } catch (error) {
      console.log(error);
    }
  };

  const _deleteActivity = async (id) => {
    try {
      const response = await config.delete(`/activity-groups/${id}`);
      getActivities();
      setShowModalDelete(false);
      setShowModalToast(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container max-w-[1000px] mx-auto">
      <div className="flex justify-between my-[3rem]">
        <h1 className="font-bold text-4xl">Activity</h1>
        <Button
          text="Tambah"
          icon={PlusIcon}
          color="primary"
          onClick={_createActivity}
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : activities.length > 0 ? (
        <div className="grid grid-cols-4" data-cy="dashboard">
          {activities.map((item, i) => {
            return (
              <CardActivity
                onClick={() =>
                  navigate(`/todo/${item.id}`, {
                    state: {
                      activityTitle: item.title,
                    },
                  })
                }
                created_at={item?.created_at}
                title={item?.title}
                showModalDelete={() => setShowModalDelete(true)}
                setActivityData={() =>
                  setActivityData({
                    id: item?.id,
                    title: item?.title,
                  })
                }
                key={i}
              />
            );
          })}
        </div>
      ) : (
        <div data-cy="dashboard-empty-state">
          <img src={EmptyActivity} alt="empty-activity" />
        </div>
      )}

      <ModalDelete
        onClose={() => setShowModalDelete(false)}
        onConfirm={() => _deleteActivity(activityData?.id)}
        isOpen={showModalDelete}
        content={activityData?.title}
      />
      <Toast
        content="Activity berhasil dihapus"
        isOpen={showModalToast}
        onClose={() => setShowModalToast(false)}
      />
    </section>
  );
};

export default Dashboard;