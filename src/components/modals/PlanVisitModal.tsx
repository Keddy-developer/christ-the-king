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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface PlanVisitModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const PlanVisitModal = ({ isOpen, onOpenChange }: PlanVisitModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Thank you! We've received your plan. See you on Sunday!");
        onOpenChange(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto rounded-3xl">
                <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-bold text-primary">Plan Your Visit</DialogTitle>
                    <DialogDescription>
                        Let us know you're coming! We'd love to prepare a special welcome for you.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" required className="rounded-xl" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="service">Preferred Service</Label>
                            <Select required>
                                <SelectTrigger className="rounded-xl">
                                    <SelectValue placeholder="Select a service time" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="9am">1st Service - 9:00 AM</SelectItem>
                                    <SelectItem value="11am">2nd Service - 11:00 AM</SelectItem>
                                    <SelectItem value="wednesday">Mid-week - 6:30 PM (Wed)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="guests">Number of Guests</Label>
                            <Input id="guests" type="number" min="1" defaultValue="1" className="rounded-xl" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-2xl">
                        Confirm My Visit
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default PlanVisitModal;
