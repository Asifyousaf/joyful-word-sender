
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Message {
  text: string;
  author: string;
}

interface MessageFormProps {
  onAddMessage: (message: Message) => void;
}

const MessageForm = ({ onAddMessage }: MessageFormProps) => {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate a slight delay for a better UX
    setTimeout(() => {
      onAddMessage({
        text: message,
        author: author.trim() || "Anonymous"
      });
      
      setMessage("");
      setAuthor("");
      setIsSubmitting(false);
      
      toast.success("Message created successfully!");
    }, 300);
  };

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-primary">Create a Joyful Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Enter something positive or uplifting..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] resize-none focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="author" className="text-sm font-medium">
              Author (optional)
            </label>
            <Input
              id="author"
              placeholder="Your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="focus:border-primary focus:ring-primary"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit"
            disabled={isSubmitting || !message.trim()}
            className="bg-gradient-joy hover:opacity-90 transition-opacity w-full"
          >
            {isSubmitting ? "Creating..." : "Create Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default MessageForm;
