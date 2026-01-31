import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { PlayCircle, Clock, Calendar } from "lucide-react";

interface WatchOnlineModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const recentSermons = [
    { title: "The Power of Faith", speaker: "Bishop John O.", date: "Jan 26, 2025", duration: "45:20" },
    { title: "Walking in Divine Purpose", speaker: "Pastor Sarah K.", date: "Jan 19, 2025", duration: "38:15" },
    { title: "Overcoming Life's Giants", speaker: "Bishop John O.", date: "Jan 12, 2025", duration: "52:10" },
];

const WatchOnlineModal = ({ isOpen, onOpenChange }: WatchOnlineModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[2rem] p-0 border-none">
                <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                    {/* Mock YouTube Embed */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&h=675&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                    <div className="relative text-white text-center z-10 p-8">
                        <PlayCircle size={80} className="mx-auto mb-4 text-primary animate-pulse" />
                        <h3 className="text-2xl font-bold font-serif mb-2">Watch Live Stream</h3>
                        <p className="text-sm opacity-90 max-w-md mx-auto">
                            Our service starts every Sunday at 9:00 AM & 11:00 AM EAT.
                            If we're not live, watch our latest sermon below.
                        </p>
                    </div>
                </div>

                <div className="p-8">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="font-serif text-2xl font-bold text-foreground">Recent Sermons</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        {recentSermons.map((sermon) => (
                            <div key={sermon.title} className="flex items-center justify-between p-4 bg-church-cream rounded-2xl hover:bg-primary/5 transition-colors group cursor-pointer border border-transparent hover:border-primary/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <PlayCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{sermon.title}</h4>
                                        <p className="text-xs text-muted-foreground">{sermon.speaker}</p>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end gap-1">
                                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                        <Calendar size={10} /> {sermon.date}
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] text-primary font-bold">
                                        <Clock size={10} /> {sermon.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default WatchOnlineModal;
