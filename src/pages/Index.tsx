import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const members = [
    { name: 'Sazuke_', role: 'Лидер', avatar: '/img/1cc09774-7099-4237-b721-2951eade12e8.jpg' },
    { name: '_User1945', role: 'Билдер', avatar: '/img/1cc09774-7099-4237-b721-2951eade12e8.jpg' },
    { name: 'Kevuab', role: 'Билдер', avatar: '/img/1cc09774-7099-4237-b721-2951eade12e8.jpg' },
  ];

  const achievements = [
    { title: 'Лучший билд месяца', description: 'Грандиозный замок в небесах' },
    { title: 'Командная работа', description: 'Строительство мегаполиса' },
    { title: 'PvP чемпионы', description: 'Победа в турнире' },
  ];

  const rules = [
    'Уважать участников клана',
    'Не разрушать постройки других игроков',
    'Помогать новичкам',
    'Участвовать в клановых мероприятиях',
    'Строить только качественные постройки',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-blue to-minecraft-green">
      {/* Navigation */}
      <nav className="bg-minecraft-dark/90 backdrop-blur-sm p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold font-minecraft">XTRA CLAN</div>
          <div className="flex space-x-6">
            <a href="#home" className="text-white hover:text-minecraft-green transition-colors">Главная</a>
            <a href="#members" className="text-white hover:text-minecraft-green transition-colors">Участники</a>
            <a href="#awards" className="text-white hover:text-minecraft-green transition-colors">Награды</a>
            <a href="#rules" className="text-white hover:text-minecraft-green transition-colors">Правила</a>
            <a href="#gallery" className="text-white hover:text-minecraft-green transition-colors">Галерея</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/img/6acbb606-cca7-4ac4-892d-3faf50842811.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-minecraft text-minecraft-green shadow-2xl">
            CLAN XTRA
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Элитный Minecraft клан с самыми талантливыми билдерами и PvP игроками
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-black font-bold px-8 py-3 text-lg">
              <Icon name="Users" className="mr-2" />
              Присоединиться
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-minecraft-dark px-8 py-3 text-lg">
              <Icon name="Eye" className="mr-2" />
              Галерея
            </Button>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 bg-minecraft-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-minecraft text-minecraft-green">
            <Icon name="Users" className="inline mr-4" />
            УЧАСТНИКИ КЛАНА
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card key={index} className="bg-minecraft-gray/20 border-minecraft-green/30 hover:border-minecraft-green transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden bg-minecraft-green/20">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover pixelated"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-minecraft-green font-minecraft">{member.name}</h3>
                  <Badge className="bg-minecraft-purple text-white">{member.role}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-gradient-to-r from-minecraft-purple to-minecraft-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-minecraft text-white">
            <Icon name="Trophy" className="inline mr-4" />
            НАГРАДЫ КЛАНА
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <img 
                      src="/img/4c15d754-c112-4df7-ae3e-57c2b118fb7e.jpg" 
                      alt="Award"
                      className="w-full h-full object-cover rounded-lg pixelated"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-300 font-minecraft">{achievement.title}</h3>
                  <p className="text-white/80">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-minecraft-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-minecraft text-minecraft-green">
            <Icon name="Shield" className="inline mr-4" />
            ПРАВИЛА КЛАНА
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-minecraft-gray/20 border-minecraft-green/30">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Icon name="Check" className="text-minecraft-green flex-shrink-0" />
                      <span className="text-lg">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-r from-minecraft-green to-minecraft-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-minecraft text-white">
            <Icon name="Image" className="inline mr-4" />
            ГАЛЕРЕЯ ПОСТРОЕК
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="aspect-square bg-minecraft-gray/20 flex items-center justify-center">
                  <Icon name="Mountain" size={48} className="text-minecraft-green" />
                  <span className="ml-2 text-white font-minecraft">BUILD #{item}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-minecraft text-minecraft-green">CLAN XTRA</h3>
          <p className="text-minecraft-gray mb-6">Легендарный Minecraft клан с 2024 года</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-white hover:text-minecraft-green">
              <Icon name="MessageSquare" className="mr-2" />
              Discord
            </Button>
            <Button variant="ghost" className="text-white hover:text-minecraft-green">
              <Icon name="Youtube" className="mr-2" />
              YouTube
            </Button>
            <Button variant="ghost" className="text-white hover:text-minecraft-green">
              <Icon name="Twitch" className="mr-2" />
              Twitch
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;