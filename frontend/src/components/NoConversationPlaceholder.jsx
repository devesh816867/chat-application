import { MessageSquareHeart } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-md flex items-center justify-center border border-blue-500/20 mb-6">
        <MessageSquareHeart className="w-10 h-10 text-blue-500" />
      </div>

      <h3 className="text-xl font-semibold text-zinc-200 mb-2">
        Select a conversation
      </h3>

      <p className="text-zinc-400 max-w-md">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>

    </div>
  );
};

export default NoConversationPlaceholder;
