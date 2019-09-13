import React from 'react';

import LayoutWithMenu from '../components/layoutWithMenu';
import SEO from '../components/seo';

const profile = require('../images/profile.jpg');

const IndexPage = ({}) => (
  <LayoutWithMenu>
    <SEO title="A Propos" />
    <div className="content flex flex-col-reverse w-full border-gray-900  xl:mt-auto xl:flex-row xl:flex-row xl:ml-20 xl:border-l-2">
      <div className="xl:w-2/3 xl:px-10">
        <h2 className="text-xl font-bold uppercase mb-4 text-white">
          Biographie
        </h2>
        <p className="font-medium leading-normal tracking-wide">
          Copiste au Louvre et au Musée d'Art Moderne de Paris, C.ValérieK.
          peint à l'huile depuis 25 ans et vit entre Paris et New-York.
          Influencées par Delaunay, Dufy et Macke pour leur sens de la couleur
          et leur audace, les créations de C.ValérieK. diffusent la joie,
          l'énergie et l'enthousiasme qu'elle souhaite transmettre avec humour.
          C.ValérieK. peint également sur commande
        </p>

        <h2 className="text-xl font-bold uppercase mb-4 mt-10 text-white">
          Les Peintures de C.ValérieK.
        </h2>
        <div className="font-medium leading-normal tracking-wide">
          <p>C.ValérieK. développe 4 thématiques dans sa peinture. </p>
          <ul className="list-inside">
            <li className="mt-4">
              Des Copies de Musées ou Libres, des Copies Personnalisées, des
              Compositions ou Portraits Symboliques et enfin des Créations
              Inspirées.
            </li>
            <li className="mt-4">
              Les Copies sont des reproductions de l’œuvre faite au musée ou en
              atelier. Les dimensions dans les musées doivent être au minimum de
              plus ou moins 10% de la taille réelle de l'œuvre originale, sans
              la signature du maître avec un tampon du musée au dos et ma
              signature.
            </li>
            <li className="mt-4">
              Les Copies Personnalisées sont la reproduction d’une œuvre connue
              en remplaçant un visage ou un élément de la toile par le sujet
              demandé.
            </li>
            <li className="mt-4">
              Les Compositions et Portraits Symboliques réunissent avec humour
              sur une même toile, le portrait réaliste d'un sujet et, sous forme
              de symboles, son univers (famille, signe astrologique, traits de
              caractère, métier, études, activités, passions, lieux,
              anecdotes...).
            </li>
            <li className="mt-4">
              Les Créations Inspirées sont des œuvres inspirées par
              l’environnement ou un style de peinture.
            </li>
          </ul>
        </div>
      </div>
      <div className="h-auto w-full xl:w-1/3">
        <img className="w-full" src={profile} alt="CValerieK" />
      </div>
    </div>
  </LayoutWithMenu>
);

export default IndexPage;
