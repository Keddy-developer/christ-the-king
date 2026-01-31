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
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface VolunteerModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const VolunteerModal = ({ isOpen, onOpenChange }: VolunteerModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Application submitted! Our ministry leader will contact you soon.");
        onOpenChange(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto rounded-3xl">
                <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-bold text-primary">Volunteer Application</DialogTitle>
                    <DialogDescription>
                        Join a ministry and use your gifts to serve the Kingdom.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="v-name">Full Name</Label>
                                <Input id="v-name" placeholder="John Doe" required className="rounded-xl" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="v-phone">Phone Number</Label>
                                <Input id="v-phone" placeholder="+254..." required className="rounded-xl" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="v-email">Email Address</Label>
                            <Input id="v-email" type="email" placeholder="john@example.com" required className="rounded-xl" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="v-ministry">Ministry of Interest</Label>
                            <Select required>
                                <SelectTrigger className="rounded-xl">
                                    <SelectValue placeholder="Select a department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="worship">Worship & Music</SelectItem>
                                    <SelectItem value="ushering">Ushering & Protocol</SelectItem>
                                    <SelectItem value="media">Media & Tech</SelectItem>
                                    <SelectItem value="youth">Youth Ministry</SelectItem>
                                    <SelectItem value="children">Sunday School</SelectItem>
                                    <SelectItem value="hospitality">Hospitality Team</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="v-exp">Previous Experience / Skills</Label>
                            <Textarea
                                id="v-exp"
                                placeholder="Tell us a bit about yourself and any skills you'd like to share..."
                                className="rounded-xl min-h-[100px]"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-2xl">
                        Submit Application
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default VolunteerModal;
