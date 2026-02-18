import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab ${
          activeTab === "chats"
            ? "bg-zinc-700/50 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab ${
          activeTab === "contacts"
            ? "bg-zinc-700/50 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}

export default ActiveTabSwitch;
