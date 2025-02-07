'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Tarifs() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-6">
        <h1 className="text-3xl font-semibold text-teal-600">Nos Tarifs</h1>
      </header>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center text-teal-600">Nos Offres</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-600">Forfait de Gestion</h3>
            <p className="mt-4 text-gray-600">€200/mois</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-600">Vente de Propriété</h3>
            <p className="mt-4 text-gray-600">€500 par transaction</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-600">Consultation Personnalisée</h3>
            <p className="mt-4 text-gray-600">€100 par heure</p>
          </div>
        </div>
      </section>

      <button 
        onClick={() => router.push("/")} 
        className="mt-8 text-teal-600 hover:underline">
        Retour à l'accueil
      </button>
    </div>
  );
}
