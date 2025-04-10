import { useState } from "react";

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-[#5c0601] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#7c0802] transition-all cursor-pointer"
        >
          💬 Chat with us
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[350px] h-[470px] z-50 shadow-xl border border-gray-300 rounded-xl overflow-hidden bg-white">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/q6ev75eburH4Xu7b50O93"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ChatBotWidget;
