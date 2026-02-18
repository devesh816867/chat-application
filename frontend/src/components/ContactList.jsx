import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function ContactList() {
  const {
    getAllContacts,
    allContacts,
    setSelectedUser,
    selectedUser,
    isUsersLoading,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <>
      {allContacts.map((contact) => {
        const isActive = selectedUser?._id === contact._id;

        return (
          <div
            key={contact._id}
            onClick={() => setSelectedUser(contact)}
            className={`
              p-4 rounded-xl cursor-pointer transition-all duration-200
              ${
                isActive
                  ? "bg-zinc-700/60 border border-zinc-600/40"
                  : "bg-zinc-800/40 hover:bg-zinc-700/50"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className={`avatar ${
                  onlineUsers.includes(contact._id) ? "online" : "offline"
                }`}
              >
                <div className="size-12 rounded-full">
                  <img
                    src={contact.profilePic || "/avatar.png"}
                    alt={contact.fullName}
                  />
                </div>
              </div>

              <h4 className="text-zinc-200 font-medium truncate">
                {contact.fullName}
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ContactList;
