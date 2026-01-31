import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BellRing } from "lucide-react";
import { toast } from "sonner";

interface SubscriptionModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    eventTitle?: string;
}

const SubscriptionModal = ({ isOpen, onOpenChange, eventTitle }: SubscriptionModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(eventTitle ? `You're all set! We'll remind you about "${eventTitle}".` : "Thank you for subscribing to our updates!");
        onOpenChange(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[400px] max-h-[90vh] overflow-y-auto rounded-3xl">
                <DialogHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                        <BellRing />
                    </div>
                    <DialogTitle className="font-serif text-2xl font-bold text-foreground">
                        {eventTitle ? "Event Reminder" : "Stay Updated"}
                    </DialogTitle>
                    <DialogDescription>
                        {eventTitle
                            ? `Get a reminder 24 hours before "${eventTitle}" starts.`
                            : "Subscribe to our newsletter for the latest church news and events."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="s-email">Email Address</Label>
                            <Input id="s-email" type="email" placeholder="your@email.com" required className="rounded-xl" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-2xl">
                        {eventTitle ? "Remind Me" : "Subscribe Now"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SubscriptionModal;
