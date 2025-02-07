'use client'; // Assurez-vous que le fichier est un composant client

import { useRouter } from "next/navigation"; // Utiliser next/navigation pour le client
import { Button } from "@/components/ui/button"; // Si tu as une composant Button
import { motion } from "framer-motion"; // Pour l'animation
import { MapPin, Calendar } from "lucide-react"; // Icônes pour le contact

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-teal-600">Conciergerie Immobilière</h1>
          <ul className="flex space-x-8 text-gray-600">
            <li onClick={() => router.push("/")}>Accueil</li>
            <li onClick={() => router.push("/services")}>Nos Services</li>
            <li onClick={() => router.push("/tarifs")}>Tarifs</li>
            <li onClick={() => router.push("/faq")}>FAQ</li>
            <li onClick={() => router.push("/contact")}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-100 text-teal-800 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Votre Partenaire en Conciergerie Immobilière
          </motion.h2>
          <p className="mt-4 text-lg">
            Des services sur mesure pour gérer et valoriser vos biens immobiliers.
          </p>
          <Button className="mt-6 bg-white text-teal-600 hover:text-white hover:bg-teal-700">
            Demander une Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-teal-600">Gestion de Propriété</h3>
            <p className="mt-2 text-gray-600">Nous gérons vos biens immobiliers pour une tranquillité d'esprit totale.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-teal-600">Vente et Location</h3>
            <p className="mt-2 text-gray-600">Optimisez la vente et la location de vos biens grâce à nos services experts.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-teal-600">Assistance Personnalisée</h3>
            <p className="mt-2 text-gray-600">Des solutions sur mesure pour tous vos besoins immobiliers.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-teal-50 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactez-nous</h2>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-8 shadow-lg rounded-xl">
            <label className="block text-gray-600 mb-2">Nom complet</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full border rounded-xl px-4 py-2 mb-4 focus:ring-2 focus:ring-teal-400"
            />
            <label className="block text-gray-600 mb-2">Adresse Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full border rounded-xl px-4 py-2 mb-4 focus:ring-2 focus:ring-teal-400"
            />
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              placeholder="Écrivez votre message ici..."
              className="w-full border rounded-xl px-4 py-2 mb-4 focus:ring-2 focus:ring-teal-400"
            ></textarea>
            <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
              Envoyer le Message
            </Button>
          </form>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Notre Emplacement</h2>
        <div className="max-w-7xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.95373521550423!3d-37.81621897975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e7f4fcb6936!2zUGFyY2UgU3QsIE1lbGJvdXJuZQ!5e0!3m2!1sen!2sau!4v1614820661283!5m2!1sen!2sau"
            width="100%"
            height="400"
            className="rounded-xl border-2 border-teal-400"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">© 2025 Conciergerie Immobilière. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
