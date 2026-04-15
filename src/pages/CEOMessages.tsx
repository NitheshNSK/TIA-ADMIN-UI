import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { 
  Plus, 
  Search, 
  User, 
  Send, 
  MoreVertical, 
  Hash, 
  Paperclip,
  Smile,
  MessageSquare
} from "lucide-react";

export default function CEOMessages() {
  const [activeTab, setActiveTab] = useState("Direct");
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [showNewGroupModal, setShowNewGroupModal] = useState(false);

  const directMessages = [
    { id: 1, name: "Arun Kumar", role: "Branch Head - Chennai", status: "online", lastMsg: "The Q2 targets have been met." },
    { id: 2, name: "Priya Raj", role: "VIP Coordinator", status: "offline", lastMsg: "New VIP onboarding is complete." },
    { id: 3, name: "Suresh Mani", role: "Accounts Manager", status: "online", lastMsg: "Monthly audit report is ready." },
  ];

  const groups = [
    { id: 101, name: "Strategic Planning", members: 12, lastMsg: "Meeting at 4 PM today." },
    { id: 102, name: "Branch Managers", members: 45, lastMsg: "New protocol for registration." },
    { id: 103, name: "VIP Support Team", members: 8, lastMsg: "Handle the issue for member #243" },
  ];

  const chats = activeTab === "Direct" ? directMessages : groups;

  return (
    <AppLayout>
      <div className="flex h-[calc(100vh-8rem)] bg-[var(--bg-card)] rounded-3xl border shadow-sm overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        
        {/* CHAT LIST SIDEBAR */}
        <div className="w-80 border-r flex flex-col" style={{ borderColor: 'var(--border)' }}>
          <div className="p-6 border-b" style={{ borderColor: 'var(--border)' }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Communications</h2>
                <button 
                    onClick={() => setShowNewGroupModal(true)}
                    className="p-2 bg-[var(--primary)] text-white rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                    <Plus size={18} />
                </button>
            </div>

            <div className="flex gap-2 p-1 bg-[var(--bg-soft)] rounded-2xl mb-4">
                {["Direct", "Groups"].map(t => (
                    <button 
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === t ? 'bg-[var(--bg-card)] text-[var(--primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--primary)]'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={14} />
                <input className="w-full pl-9 pr-4 py-2.5 bg-[var(--bg-soft)] rounded-xl text-xs outline-none focus:ring-1 focus:ring-[var(--primary)] transition-all" placeholder="Search conversations..." />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar">
            {chats.map((chat: any) => (
                <div 
                    key={chat.id} 
                    onClick={() => setSelectedChat(chat)}
                    className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-[var(--bg-soft)]/50 transition-all border-b border-transparent ${selectedChat?.id === chat.id ? 'bg-[var(--bg-soft)] border-l-4 !border-l-[var(--primary)]' : ''}`}
                    style={{ borderColor: 'var(--border)' }}
                >
                    <div className="relative">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${activeTab === 'Direct' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-pink-500/10 text-pink-500'}`}>
                            {activeTab === 'Direct' ? <User size={20}/> : <Hash size={20}/>}
                        </div>
                        {activeTab === 'Direct' && (
                            <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[var(--bg-card)] ${chat.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`} />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold truncate">{chat.name}</h4>
                            <span className="text-[10px] text-[var(--text-muted)] font-black uppercase">2m</span>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] truncate font-medium">{chat.lastMsg}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 flex flex-col bg-[var(--bg-soft)]/20">
            {selectedChat ? (
                <>
                    <div className="p-6 bg-[var(--bg-card)] border-b flex justify-between items-center" style={{ borderColor: 'var(--border)' }}>
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === 'Direct' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-pink-500/10 text-pink-500'}`}>
                                {activeTab === 'Direct' ? <User size={18}/> : <Hash size={18}/>}
                            </div>
                            <div>
                                <h3 className="font-bold text-sm leading-none mb-1">{selectedChat.name}</h3>
                                <p className="text-[10px] text-[var(--text-muted)] font-bold">{activeTab === 'Direct' ? selectedChat.role : `${selectedChat.members} members`}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-[var(--bg-soft)] rounded-xl transition-colors"><Search size={18} className="text-[var(--text-muted)]" /></button>
                            <button className="p-2 hover:bg-[var(--bg-soft)] rounded-xl transition-colors"><MoreVertical size={18} className="text-[var(--text-muted)]" /></button>
                        </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto space-y-8">
                        <div className="flex justify-center">
                            <span className="px-4 py-1 rounded-full bg-[var(--bg-card)] text-[10px] font-bold text-[var(--text-muted)] border" style={{ borderColor: 'var(--border)' }}>TODAY</span>
                        </div>

                        <ChatMessage 
                            msg="Hero team, let's coordinate on the upcoming regional launch. Any blockers?" 
                            time="10:45 AM" 
                            isOwn={false} 
                            author="Arun Kumar"
                        />
                        <ChatMessage 
                            msg="Chennai south team is ready. We just need the final media assets from the creative group." 
                            time="11:02 AM" 
                            isOwn={true} 
                        />
                        <ChatMessage 
                            msg="I'll ping the media library team now. They should have them ready by EOD." 
                            time="11:05 AM" 
                            isOwn={false} 
                            author="Priya Raj"
                        />
                    </div>

                    <div className="p-6 bg-[var(--bg-card)]">
                        <div className="flex items-end gap-3 bg-[var(--bg-soft)] p-3 rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
                            <div className="flex gap-1 mb-1">
                                <button className="p-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"><Paperclip size={18}/></button>
                                <button className="p-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"><Smile size={18}/></button>
                            </div>
                            <textarea 
                                className="flex-1 bg-transparent py-2 px-1 outline-none text-sm resize-none min-h-[40px] max-h-[120px]" 
                                placeholder="Write your message here..."
                            />
                            <button className="p-3 bg-[var(--primary)] text-white rounded-xl shadow-lg hover:rotate-12 transition-transform active:scale-90">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center opacity-40">
                    <div className="w-24 h-24 rounded-full bg-[var(--bg-soft)] flex items-center justify-center mb-6">
                        <MessageSquare size={40} className="text-[var(--text-muted)]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Select a Conversation</h3>
                    <p className="max-w-xs text-sm">Choose from the list on the left to start communicating with your team.</p>
                </div>
            )}
        </div>

        {/* NEW GROUP MODAL (MOCKED) */}
        {showNewGroupModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowNewGroupModal(false)} />
                <div className="relative w-full max-w-md bg-[var(--bg-card)] rounded-3xl border p-8 shadow-2xl" style={{ borderColor: 'var(--border)' }}>
                    <h3 className="text-2xl font-bold mb-6">Create New Group</h3>
                    <div className="space-y-4">
                        <input className="w-full p-4 bg-[var(--bg-soft)] rounded-2xl outline-none border border-transparent focus:border-[var(--primary)]" placeholder="Group Name" />
                        <div className="p-4 bg-[var(--bg-soft)] rounded-2xl min-h-[100px] text-sm text-[var(--text-muted)]">
                            Search members to add...
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button onClick={() => setShowNewGroupModal(false)} className="flex-1 py-4 font-bold rounded-2xl border hover:bg-[var(--bg-soft)]" style={{ borderColor: 'var(--border)' }}>Cancel</button>
                            <button className="flex-1 py-4 font-bold rounded-2xl bg-[var(--primary)] text-white shadow-xl">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </AppLayout>
  );
}

function ChatMessage({ msg, time, isOwn, author }: any) {
    return (
        <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
            {!isOwn && <span className="text-[10px] font-black text-[var(--text-muted)] mb-1 uppercase ml-3">{author}</span>}
            <div className={`max-w-[70%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${isOwn ? 'bg-[var(--primary)] text-white rounded-br-none' : 'bg-[var(--bg-card)] text-[var(--text-main)] rounded-bl-none border'}`} style={!isOwn ? {borderColor: 'var(--border)'} : {}}>
                {msg}
            </div>
            <span className="text-[10px] font-bold text-[var(--text-muted)] mt-1 opacity-60">{time}</span>
        </div>
    )
}
