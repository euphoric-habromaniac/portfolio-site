import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly at contact@pranjalkumar.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 dark:bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 transition-all duration-300"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card
  className="w-full max-w-md max-h-[90vh] overflow-y-auto text-foreground bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg p-8 transition-all duration-300"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
        onClick={e => e.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
          <CardTitle className="text-lg font-medium tracking-tight" data-testid="heading-contact-form">
            Get In Touch
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
            data-testid="button-close-contact-form"
            aria-label="Close contact form"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  data-testid="input-contact-name"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  data-testid="input-contact-email"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                data-testid="input-contact-subject"
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, idea, or just say hello..."
                rows={5}
                data-testid="textarea-contact-message"
              />
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white rounded-lg shadow-none hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200"
                data-testid="button-send-message"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={onClose}
                className="flex-1 text-neutral-500 hover:text-foreground dark:text-neutral-400 dark:hover:text-foreground rounded-lg shadow-none transition-colors duration-200"
                data-testid="button-cancel-contact"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;