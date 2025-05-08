
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import { getRandomAnimation, getRandomGradient } from "@/utils/animations";

interface MessageCardProps {
  message: string;
  author: string;
  onRemove?: () => void;
  isPermanent?: boolean;
}

const MessageCard = ({ message, author, onRemove, isPermanent = false }: MessageCardProps) => {
  const [animation] = useState(getRandomAnimation());
  const [gradient] = useState(getRandomGradient());

  const copyToClipboard = () => {
    const textToCopy = `"${message}" - ${author}`;
    navigator.clipboard.writeText(textToCopy);
    toast.success("Message copied to clipboard!");
  };

  return (
    <Card className={`message-card ${animation} overflow-hidden mb-6 border-none`}>
      <div className={`bg-gradient-to-br ${gradient} p-0.5 h-full rounded-lg`}>
        <div className="bg-white dark:bg-gray-900 rounded-[7px] h-full">
          <CardContent className="pt-6">
            <p className="text-lg mb-2 font-medium leading-relaxed">"{message}"</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">— {author}</p>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={copyToClipboard}
                className="text-gray-500 hover:text-primary"
              >
                <Copy size={18} />
              </Button>
              {!isPermanent && onRemove && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onRemove}
                  className="text-gray-500 hover:text-destructive"
                >
                  Remove
                </Button>
              )}
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default MessageCard;
