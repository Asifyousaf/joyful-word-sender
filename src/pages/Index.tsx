
import { useState } from "react";
import MessageForm from "@/components/MessageForm";
import MessageCard from "@/components/MessageCard";
import MessageCollection from "@/components/MessageCollection";
import { PresetMessage } from "@/data/presetMessages";
import { getRandomPresetMessage } from "@/data/presetMessages";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";

interface UserMessage {
  id: string;
  text: string;
  author: string;
}

const Index = () => {
  const [userMessages, setUserMessages] = useState<UserMessage[]>([]);
  const [featuredMessage, setFeaturedMessage] = useState<PresetMessage>(getRandomPresetMessage());

  const handleAddMessage = ({ text, author }: { text: string; author: string }) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      author
    };
    
    setUserMessages([newMessage, ...userMessages]);
  };

  const handleRemoveMessage = (id: string) => {
    setUserMessages(userMessages.filter(msg => msg.id !== id));
  };

  const handleSelectPreset = (preset: PresetMessage) => {
    handleAddMessage({
      text: preset.text,
      author: preset.author
    });
  };

  const handleRefreshFeatured = () => {
    setFeaturedMessage(getRandomPresetMessage());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 py-8 mx-auto">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-joy font-bold">
              Joyful Word Sender
            </h1>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create and share beautiful positive messages to brighten someone's day!
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <MessageForm onAddMessage={handleAddMessage} />
            <MessageCollection onSelectPreset={handleSelectPreset} />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-secondary">Featured Message</h2>
              <Button variant="outline" size="sm" onClick={handleRefreshFeatured}>
                <RefreshCw className="mr-2 h-4 w-4" />
                New Message
              </Button>
            </div>
            
            <MessageCard 
              message={featuredMessage.text} 
              author={featuredMessage.author} 
              isPermanent={true}
            />
            
            {userMessages.length > 0 && (
              <>
                <div className="flex items-center justify-between my-6">
                  <h2 className="text-2xl font-bold text-accent">Your Messages</h2>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {userMessages.length} {userMessages.length === 1 ? 'message' : 'messages'}
                  </span>
                </div>
                
                <div className="space-y-6">
                  {userMessages.map((msg) => (
                    <MessageCard 
                      key={msg.id} 
                      message={msg.text} 
                      author={msg.author}
                      onRemove={() => handleRemoveMessage(msg.id)} 
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
