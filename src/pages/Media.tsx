import { Upload, Search, Grid, List, MoreVertical } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

export default function Media() {
  const mediaItems = [
    { name: "Promo_Video.mp4", size: "45 MB", type: "Video", date: "2024-05-01" },
    { name: "Banner_Hero.png", size: "2.4 MB", type: "Image", date: "2024-05-02" },
    { name: "Course_Syllabus.pdf", size: "1.2 MB", type: "Document", date: "2024-05-03" },
    { name: "Thumbnail_v1.jpg", size: "800 KB", type: "Image", date: "2024-05-04" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Media Library</h1>
            <p className="text-sm text-[var(--text-muted)]">
              Manage assets, images, and documents
            </p>
          </div>

          <div className="flex gap-2">
            <button
               className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white transition-opacity hover:opacity-90"
               style={{ background: "var(--primary)" }}
            >
              <Upload size={16} />
              Upload Assets
            </button>
          </div>
        </div>

        {/* SEARCH & VIEW TOGGLE */}
        <div className="flex items-center justify-between gap-4 p-4 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
             <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                <input 
                    placeholder="Search files..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--bg-soft)] outline-none"
                />
             </div>

             <div className="flex gap-1 p-1 rounded-lg bg-[var(--bg-soft)]">
                <button className="p-1.5 rounded-md bg-[var(--bg-card)] shadow-sm text-[var(--primary)]">
                    <Grid size={18} />
                </button>
                <button className="p-1.5 rounded-md text-[var(--text-muted)]">
                    <List size={18} />
                </button>
             </div>
        </div>

        {/* GRID VIEW */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mediaItems.map((item, i) => (
            <div 
                key={i} 
                className="group relative rounded-2xl border overflow-hidden bg-[var(--bg-card)] transition-all hover:shadow-md"
                style={{ borderColor: 'var(--border)' }}
            >
                <div className="aspect-square bg-[var(--bg-soft)] flex items-center justify-center relative">
                    {item.type === 'Image' ? (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/10 to-transparent" />
                    ) : item.type === 'Video' ? (
                         <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white">
                             <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                         </div>
                    ) : (
                        <div className="font-bold text-[var(--text-muted)] opacity-20 text-4xl">DOC</div>
                    )}
                    
                    <button className="absolute top-2 right-2 p-1 rounded-md bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical size={16} />
                    </button>
                </div>

                <div className="p-3">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{item.type}</span>
                        <span className="text-[10px] text-[var(--text-muted)]">{item.size}</span>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
