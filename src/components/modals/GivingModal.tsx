import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Smartphone,
    CreditCard,
    Building2,
    Heart,
    Copy,
    Check
} from "lucide-react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";

interface GivingModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const GivingModal = ({ isOpen, onOpenChange }: GivingModalProps) => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[2rem] p-0 border-none shadow-2xl">
                <DialogHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                        <Heart className="fill-current" />
                    </div>
                    <DialogTitle className="font-serif text-2xl font-bold text-foreground">Kingdom Partnering</DialogTitle>
                    <DialogDescription>
                        Thank you for your generosity. Choose your preferred way to support the ministry.
                    </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="mpesa" className="w-full mt-6">
                    <TabsList className="grid w-full grid-cols-3 rounded-xl bg-church-cream p-1">
                        <TabsTrigger value="mpesa" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            M-Pesa
                        </TabsTrigger>
                        <TabsTrigger value="bank" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Bank
                        </TabsTrigger>
                        <TabsTrigger value="online" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Online
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="mpesa" className="py-6 space-y-6">
                        <div className="p-6 bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white">
                                    <Smartphone size={20} />
                                </div>
                                <h4 className="font-bold text-lg">M-Pesa Paybill</h4>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-border">
                                    <div>
                                        <p className="text-[10px] text-muted-foreground uppercase font-bold">Business Number</p>
                                        <p className="font-mono text-xl font-bold">123456</p>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard("123456", "paybill")}>
                                        {copied === "paybill" ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                                    </Button>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-border">
                                    <div>
                                        <p className="text-[10px] text-muted-foreground uppercase font-bold">Account Name</p>
                                        <p className="font-serif font-bold">OFFERING / TITHE</p>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard("OFFERING", "acc")}>
                                        {copied === "acc" ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-center text-muted-foreground leading-relaxed">
                            Once the transaction is complete, you will receive a confirmation SMS from M-Pesa.
                        </p>
                    </TabsContent>

                    <TabsContent value="bank" className="py-6 space-y-4">
                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                                    <Building2 size={20} />
                                </div>
                                <h4 className="font-bold text-lg">Bank Transfer</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between border-b border-primary/10 py-2">
                                    <span className="text-muted-foreground">Bank Name</span>
                                    <span className="font-bold">Equity Bank Kenya</span>
                                </div>
                                <div className="flex justify-between border-b border-primary/10 py-2">
                                    <span className="text-muted-foreground">Branch</span>
                                    <span className="font-bold">Malindi Branch</span>
                                </div>
                                <div className="flex justify-between border-b border-primary/10 py-2">
                                    <span className="text-muted-foreground">Account Number</span>
                                    <span className="font-bold">0123456789123</span>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-2xl">
                            Download Instruction PDF
                        </Button>
                    </TabsContent>

                    <TabsContent value="online" className="py-6 space-y-4">
                        <div className="p-10 text-center space-y-4 bg-church-cream rounded-2xl border border-dashed border-primary/30">
                            <CreditCard size={48} className="mx-auto text-primary/40" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-lg">Secure Card Payment</h4>
                                <p className="text-sm text-muted-foreground">Pay via Stripe or PayPal</p>
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-2xl">
                                Open Secure Payment Portal
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
};

export default GivingModal;
