'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-6">
        <h1 className="text-3xl font-semibold text-teal-600">Nos Services</h1>
      </header>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center text-teal-600">Services proposés</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-600">Gestion Locative</h3>
            <p className="mt-4 text-gray-600">Nous nous occupons de la gestion de vos biens immobiliers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-600">Vente de Propriétés</h3>
            <p className="mt-4 text-gray-600">Assistance dans la vente de vos biens immobiliers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-600">Consultation Personnalisée</h3>
            <p className="mt-4 text-gray-600">Conseils et stratégies adaptées à vos projets immobiliers.</p>
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
