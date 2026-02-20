import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, MapPin, Train, Bus, Plane, Package } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Cab Booking',
    description: 'Comfortable and reliable cab services for local and outstation travel.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Package,
    title: 'Tour Packages',
    description: 'Curated tour packages for memorable vacations and pilgrimages.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Train,
    title: 'Train Tickets',
    description: 'Easy train ticket booking with confirmed reservations.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Bus,
    title: 'Bus Tickets',
    description: 'Book bus tickets for comfortable intercity travel.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Plane,
    title: 'Flight Tickets',
    description: 'Domestic and international flight bookings at competitive prices.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: MapPin,
    title: 'Custom Itineraries',
    description: 'Personalized travel plans tailored to your preferences.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel solutions for all your journey needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
