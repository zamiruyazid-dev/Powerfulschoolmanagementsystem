import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, HardHat, Wrench, ArrowRight, X, Image as ImageIcon, Settings, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';
import { ScrollArea } from '@/app/components/ui/scroll-area';

interface Trade {
  id: string;
  title: string;
  code: string;
  icon: typeof Code;
  image: string;
  description: string;
  levels: Array<{
    level: string;
    duration: string;
    description: string;
  }>;
  tools: string[];
  gallery: string[];
  features: string[];
}

const trades: Trade[] = [
  {
    id: 'sod',
    title: 'Software Development',
    code: 'SOD',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2ODcxODI3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Learn programming, web development, and software engineering with hands-on experience in modern technologies.',
    levels: [
      { level: 'Level 3 SOD', duration: '1 Year', description: 'Foundation in programming basics, HTML/CSS, JavaScript fundamentals' },
      { level: 'Level 4 SOD', duration: '1 Year', description: 'Advanced programming, databases, web frameworks, mobile development' },
      { level: 'Level 5 SOD', duration: '1 Year', description: 'Software architecture, cloud computing, DevOps, final projects' },
    ],
    tools: ['Visual Studio Code', 'Git & GitHub', 'React & Node.js', 'MySQL & MongoDB', 'Docker', 'AWS/Azure'],
    gallery: [
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    ],
    features: ['Hands-on coding labs', 'Real-world projects', 'Industry mentorship', 'Job placement support', 'Modern curriculum', 'Certification programs'],
  },
  {
    id: 'bdc',
    title: 'Building Construction',
    code: 'BDC',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1672072830247-85ac23671e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzY4NzMwNzQ0fDA',
    description: 'Master construction techniques, architecture, and project management with practical field experience.',
    levels: [
      { level: 'Level 3 BDC', duration: '1 Year', description: 'Construction basics, materials, safety, blueprint reading' },
      { level: 'Level 4 BDC', duration: '1 Year', description: 'Advanced techniques, surveying, estimation, site management' },
      { level: 'Level 5 BDC', duration: '1 Year', description: 'Project management, structural design, quality control, capstone projects' },
    ],
    tools: ['AutoCAD', 'Measuring tools', 'Safety equipment', 'Power tools', 'Survey instruments', 'BIM Software'],
    gallery: [
      'https://images.unsplash.com/photo-1672072830247-85ac23671e96',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
    ],
    features: ['On-site training', 'Safety certifications', 'Industry partnerships', 'Modern workshops', 'Professional mentorship', 'Job placement'],
  },
  {
    id: 'aut',
    title: 'Automobile Technology',
    code: 'AUT',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njg4MDYyMTl8MA',
    description: 'Automotive repair, maintenance, and diagnostic skills with modern vehicle technology training.',
    levels: [
      { level: 'Level 3 AUT', duration: '1 Year', description: 'Automotive basics, engine systems, electrical fundamentals' },
      { level: 'Level 4A AUT', duration: '1 Year', description: 'Advanced diagnostics, transmission systems, fuel injection' },
      { level: 'Level 4B AUT', duration: '1 Year', description: 'Electronics, hybrid systems, advanced troubleshooting' },
      { level: 'Level 5A AUT', duration: '1 Year', description: 'Vehicle management, shop operations, customer service' },
      { level: 'Level 5B AUT', duration: '1 Year', description: 'Specialization, certification prep, business management' },
    ],
    tools: ['Diagnostic scanners', 'Hydraulic lifts', 'Power tools', 'Multimeters', 'Torque wrenches', 'Computer systems'],
    gallery: [
      'https://images.unsplash.com/photo-1636761358757-0a616eb9e17e',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7',
    ],
    features: ['Modern workshop', 'Real vehicle training', 'ASE certification', 'Hybrid/EV training', 'Industry connections', 'Career support'],
  },
];

const TradesPage: React.FC = () => {
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-blue-600 text-white px-4 py-2">
            Professional Programs
          </Badge>
          <h1 className="text-5xl font-black mb-4 text-gray-900">TRADES OFFERED</h1>
          <p className="text-xl text-gray-600">Professional technical education programs with industry certification</p>
        </motion.div>

        {/* Trades Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {trades.map((trade, index) => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group" onClick={() => setSelectedTrade(trade)}>
                <div className="relative h-64">
                  <ImageWithFallback
                    src={trade.image}
                    alt={trade.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-blue-600 text-white">{trade.code}</Badge>
                    <h3 className="text-2xl font-black text-white">{trade.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription className="text-gray-600">
                    {trade.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Available Levels:</p>
                    {trade.levels.map((level) => (
                      <Badge key={level.level} variant="outline" className="mr-2">
                        {level.level}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-blue-700 bg-blue-600">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trade Details Dialog */}
      <Dialog open={!!selectedTrade} onOpenChange={() => setSelectedTrade(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          {selectedTrade && (
            <ScrollArea className="h-[80vh] pr-4">
              <DialogHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <selectedTrade.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-3xl">{selectedTrade.title}</DialogTitle>
                    <Badge className="mt-2 bg-blue-600 text-white">{selectedTrade.code}</Badge>
                  </div>
                </div>
              </DialogHeader>

              <Tabs defaultValue="levels" className="mt-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="levels">Levels</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>

                {/* Levels Tab */}
                <TabsContent value="levels" className="space-y-4">
                  {selectedTrade.levels.map((level, index) => (
                    <Card key={level.level}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-xl">{level.level}</CardTitle>
                            <CardDescription>{level.duration}</CardDescription>
                          </div>
                          <Award className="w-8 h-8 text-blue-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{level.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Tools Tab */}
                <TabsContent value="tools">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="w-5 h-5 mr-2" />
                        Tools & Equipment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedTrade.tools.map((tool) => (
                          <div key={tool} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span className="font-medium">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Gallery Tab */}
                <TabsContent value="gallery">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <ImageIcon className="w-5 h-5 mr-2" />
                        Photo Gallery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedTrade.gallery.map((img, index) => (
                          <div key={index} className="aspect-video rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={img}
                              alt={`${selectedTrade.title} ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features">
                  <Card>
                    <CardHeader>
                      <CardTitle>Program Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedTrade.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-3 p-4 border rounded-lg">
                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Separator className="my-6" />

              <div className="flex space-x-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="flex-1" size="lg">
                  Download Brochure
                </Button>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TradesPage;