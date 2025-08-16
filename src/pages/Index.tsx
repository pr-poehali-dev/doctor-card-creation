import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const doctors = [
  {
    id: 1,
    name: 'Доктор Алексей Смирнов',
    specialization: 'Кардиолог',
    directions: ['Сердечно-сосудистые заболевания', 'Диагностика сердца', 'Профилактика'],
    experience: '15 лет',
    photo: '/img/6acddd2f-605b-406f-b57b-a440c7caef8f.jpg',
    rating: 4.9,
    consultations: 1250
  },
  {
    id: 2,
    name: 'Доктор Мария Иванова',
    specialization: 'Терапевт',
    directions: ['Общая медицина', 'Диагностика', 'Лечение взрослых'],
    experience: '12 лет',
    photo: '/img/2e720ac6-19fd-42a9-8d83-cc57960d2591.jpg',
    rating: 4.8,
    consultations: 980
  },
  {
    id: 3,
    name: 'Доктор Елена Петрова',
    specialization: 'Педиатр',
    directions: ['Детская медицина', 'Вакцинация', 'Развитие детей'],
    experience: '10 лет',
    photo: '/img/6f438ed9-eaf9-4e5b-b70e-54d91e91326a.jpg',
    rating: 5.0,
    consultations: 1100
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-medical-blue to-medical-green rounded-lg flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-medical-blue to-medical-green bg-clip-text text-transparent">
                  МедКлиника
                </h1>
                <p className="text-sm text-gray-600">Забота о вашем здоровье</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-medical-blue to-medical-green hover:from-blue-600 hover:to-green-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Наши <span className="bg-gradient-to-r from-medical-blue to-medical-green bg-clip-text text-transparent">Врачи</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Команда высококвалифицированных специалистов с многолетним опытом работы
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card 
                key={doctor.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={doctor.photo} 
                      alt={doctor.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-medical-blue to-medical-green text-white">
                        <Icon name="Star" size={12} className="mr-1" />
                        {doctor.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                      {doctor.name}
                    </h3>
                    
                    <div className="flex items-center mb-4">
                      <Icon name="UserCheck" size={16} className="text-medical-blue mr-2" />
                      <span className="text-medical-blue font-medium">{doctor.specialization}</span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2 flex items-center">
                        <Icon name="Briefcase" size={14} className="mr-2" />
                        Опыт: {doctor.experience}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Icon name="Users" size={14} className="mr-2" />
                        Консультаций: {doctor.consultations}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Направления:</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.directions.map((direction, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs bg-gradient-to-r from-medical-blue/10 to-medical-green/10 border-medical-blue/20 text-gray-700 hover:from-medical-blue/20 hover:to-medical-green/20"
                          >
                            {direction}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-medical-blue to-medical-green hover:from-blue-600 hover:to-green-600 text-white"
                        size="sm"
                      >
                        <Icon name="Calendar" size={14} className="mr-2" />
                        Записаться
                      </Button>
                      <Button variant="outline" size="sm" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                        <Icon name="MessageCircle" size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-medical-blue to-medical-green">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">15+</div>
              <div className="text-blue-100">Врачей</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">5000+</div>
              <div className="text-blue-100">Пациентов</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">10</div>
              <div className="text-blue-100">Лет опыта</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">4.9</div>
              <div className="text-blue-100">Рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-medical-blue to-medical-green rounded-lg flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-montserrat font-bold">МедКлиника</h3>
              </div>
              <p className="text-gray-400">Современная медицина для вашего здоровья</p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@medclinic.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Здоровья, 1
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <div>Пн-Пт: 8:00 - 20:00</div>
                <div>Сб: 9:00 - 18:00</div>
                <div>Вс: 10:00 - 16:00</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МедКлиника. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}