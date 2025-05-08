
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { presetMessages, PresetMessage } from "@/data/presetMessages";
import MessageCard from "./MessageCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MessageCollectionProps {
  onSelectPreset: (message: PresetMessage) => void;
}

const MessageCollection = ({ onSelectPreset }: MessageCollectionProps) => {
  const categories = Array.from(new Set(presetMessages.map(m => m.category)));
  
  return (
    <Card className="border-2 border-secondary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-secondary">Preset Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="motivation">Motivation</TabsTrigger>
            <TabsTrigger value="positivity">Positive</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {presetMessages.map((preset) => (
                <div key={preset.id} className="flex items-center p-3 bg-secondary/5 rounded-lg">
                  <p className="flex-1 font-medium truncate pr-4">"{preset.text.substring(0, 40)}..."</p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => onSelectPreset(preset)}
                  >
                    Use
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="motivation">
            <div className="space-y-4">
              {presetMessages
                .filter(m => m.category === 'motivation')
                .map((preset) => (
                  <div key={preset.id} className="flex items-center p-3 bg-secondary/5 rounded-lg">
                    <p className="flex-1 font-medium truncate pr-4">"{preset.text.substring(0, 40)}..."</p>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => onSelectPreset(preset)}
                    >
                      Use
                    </Button>
                  </div>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="positivity">
            <div className="space-y-4">
              {presetMessages
                .filter(m => m.category === 'positivity' || m.category === 'compliment' || m.category === 'affirmation')
                .map((preset) => (
                  <div key={preset.id} className="flex items-center p-3 bg-secondary/5 rounded-lg">
                    <p className="flex-1 font-medium truncate pr-4">"{preset.text.substring(0, 40)}..."</p>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => onSelectPreset(preset)}
                    >
                      Use
                    </Button>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MessageCollection;
