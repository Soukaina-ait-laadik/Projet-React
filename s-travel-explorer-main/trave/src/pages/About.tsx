
import { motion } from 'framer-motion';
import { Users, Globe, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: 'Expertise Mondiale',
      description: 'Plus de 14 ans d\'expérience dans l\'organisation de voyages exceptionnels à travers le monde.'
    },
    {
      icon: Users,
      title: 'Équipe Passionnée',
      description: 'Une équipe de conseillers voyage experts, passionnés par la découverte et le partage.'
    },
    {
      icon: Award,
      title: 'Qualité Garantie',
      description: 'Sélection rigoureuse de nos partenaires pour vous offrir les meilleures expériences.'
    },
    {
      icon: Heart,
      title: 'Service Personnalisé',
      description: 'Chaque voyage est unique, conçu selon vos envies et adapté à vos besoins.'
    }
  ];

  const team = [
    {
      name: 'Era Glorie',
      role: 'Directrice Générale',
      image: 'https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Passionnée de voyages depuis toujours, Era a fondé Evasia avec la vision de rendre l\'extraordinaire accessible.'
    },
    {
      name: 'Andrie Martin',
      role: 'Expert Destinations Asie',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Spécialiste de l\'Asie, Andrie a vécu 8 ans en Thaïlande et au Japon. Il connaît chaque recoin de cette région fascinante.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Conseillère Voyages Europe',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Polyglotte et grande voyageuse, Sarah vous guide dans la découverte des trésors cachés de l\'Europe.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r bg-gray-900  text-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            À Propos de Evasia
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Depuis 2010, nous créons des souvenirs inoubliables et accompagnons nos voyageurs 
            dans la découverte du monde avec passion et expertise.
          </motion.p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Fondée en 2010 par Era Glorie, Evasia est née d’une passion profonde pour le voyage et la découverte. Depuis plus d’une décennie, 
                  notre agence s’engage à offrir bien plus qu’un simple déplacement : 
                  une véritable évasion, une expérience unique façonnée sur mesure selon vos envies.
                </p>
                <p>
                 Chez Evasia, nous croyons que chaque voyage est une aventure personnelle, une invitation à s’ouvrir au monde avec élégance, confort et authenticité. Que vous rêviez d’explorations audacieuses, de rencontres culturelles riches ou de moments de détente absolue.
                </p>
                <p>
                  Aujourd'hui, avec plus de 50 000 voyageurs satisfaits et 120 destinations 
                  dans notre catalogue, nous continuons d'innover pour vous offrir les plus 
                  belles découvertes de notre planète.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop"
                alt="Notre équipe"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui nous guide dans chaque voyage que nous organisons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les experts passionnés qui rendront votre voyage inoubliable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover shadow-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
