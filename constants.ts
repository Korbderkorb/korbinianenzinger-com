import { Project, BlogPost, NavLink, SocialLink, LandingPage } from './types';

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Projects',
    path: '/projects'
  },
  {
    label: 'Blog',
    path: '/blog'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Contact',
    path: '/#contact'
  }
];

export const LANDING_PAGE: LandingPage = {
  heroTitle: 'MUTUALISM',
  heroSubtitle: 'Designing \nSymbiotic Relationships \nbetween human \nand non-human',
  heroImage: 'https://storage.googleapis.com/mutualism-media/hydromorphology-01.webp'
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: '1',
    platform: 'Instagram',
    url: 'https://instagram.com/enzinger.k',
    icon: 'instagram'
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/korbinianenzinger',
    icon: 'linkedin'
  },
  {
    id: '3',
    platform: 'Email',
    url: 'mailto:contact@enzinger.k',
    icon: 'mail'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'crys',
    title: 'Crys',
    category: 'Design | Fashion',
    date: 'April 2023',
    description: `Paris, France`,
    subtitle: 'Artists: Maria Kuptsova, Haoyi Chen, Korbinian Enzinger',
    imageUrl: 'https://storage.googleapis.com/mutualism-media/Crys/T1.webp',
    credits: `Wearable Design: Maria Kuptsova and Korbinian Enzinger
Bag Design: Haoyi Chen
Algae Filament: Haoyi Chen
Renderings: Korbinian Enzinger
Model: Maria Kuptsova
Photos: Korbinian Enzinger`,
    content: [
      {
        type: 'text',
        content: `CRYSTALLUM is wearable piece, characterized by a sophisticated design meticulously generated through material programming and advanced additive manufacturing techniques. At its core, this wearable piece is integrating the essence of aquatic life into the forefront of contemporary fashion.

The structural foundation of CRYSTALLUM is realized through the implementation of an algae-based filament, carefully extracted from marine sources. This filament serves as a multifaceted medium, not only contributing to the structural integrity of the piece but also resonating with the sustainable dynamics inherent in our ecosystem. Being one of the main contributors to global CO2 re-metabolization, algae play an essential role in balancing climatic conditions. By encapsulating algae in the 3D printed morphology, the pieces act as an allegory for how art can become an active part in tackling environmental issues on a global scale.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Crys/_DSC48871.webp',
        alt: 'Crys Detail'
      },
      {
        type: 'text',
        content: `The amalgamation of art and science unfolds further as CRYSTALLUM's 3D printed structure becomes the canvas for a transformative process marked by the infusion of salt crystals. Inspired by the natural deposition of salts in marine environments, CRYSTALLUM studies the intrinsic elegance of crystal growth. Each crystalline formation becomes a distinct manifestation, a visual narrative of the intricate interplay of dynamic forces shaping the piece's aesthetics.`
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/_DSC4932.webp',
            alt: 'Detail 1'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/_DSC4968.webp',
            alt: 'Detail 2'
          }
        ]
      },
      {
        type: 'text',
        content: `What distinguishes CRYSTALLUM is its individualized link to the wearer, made possible through cutting-edge 3D scanning technology. The morphological arrangement of this wearable piece seamlessly aligns with the curves and contours of the human body. Inspired by the elegant growth patterns found in coral reefs, the design of the 3D printed piece emerges, echoing the formations witnessed in these natural structures.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Crys/Rendering01.webp',
        alt: 'Rendering'
      },
      {
        type: 'text',
        content: `Each piece of CRYSTALLUM is a unique creation, meticulously generated with unwavering attention to the specific event it is intended for. While the 3D printed structure remains a constant, ensuring reusability, the crystals undergo a process of regeneration, anticipating each distinct wearing event.`
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/BoraksGIF.gif',
            alt: 'Borax Salt'
          },
          {
            type: 'text',
            content: `Borax Salt Crystallization
40x Magnification
Speed x10`
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/epsomGIF.gif',
            alt: 'Epsom Salt'
          },
          {
            type: 'text',
            content: `Epsom Salt Crystallization
40x Magnification
Speed x10`
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/AlluminiumSulfateGIF.gif',
            alt: 'Ammonium Sulfate'
          },
          {
            type: 'text',
            content: `Ammonium Sulfate Crystallization
40x Magnification
Speed x10`
          }
        ]
      },
      {
        type: 'text',
        content: `Beyond its status as a mere wearable piece, CRYSTALLUM beckons you to immerse yourself in a realm where art learns from natural processes, and technology serves as a conduit for a sustainable and aesthetically conscious future.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Crys/Rendering02.webp',
        alt: 'Rendering 2'
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/_DSC4997.webp',
            alt: 'Model View 1'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/_DSC5015.webp',
            alt: 'Model View 2'
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/_DSC5040.webp',
            alt: 'Model View 3'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Crys/_DSC50171.webp',
            alt: 'Model View 4'
          }
        ]
      }
    ]
  },
  {
    id: 'hydromorphology',
    title: 'Hydromorphology',
    category: 'Work | Research',
    date: 'October 2020',
    subtitle: 'Kathmandu\nby Korbinian Enzinger\nSupervised by Prof. Claudia Pasquero and Maria Kuptsova',
    description: `Kathmandu, Nepal`,
    imageUrl: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_01.webp',
    credits: `University of Innsbruck 2020
IOUD - Synthetic Landscape Lab

Author: Dipl.-Ing. Korbinian Enzinger

Supervisor: Prof. Dr. Claudia Pasquero, MA Maria Kuptsova

External Examiner: Dr. Marco Poletto`,
    content: [
      {
        type: 'text',
        content: `The project aims to respond to the trend of humans to shape landscapes through anthropocentric environmentalism meaning that the primary goal of conserving the environment lies in the exploitation by and from human purposes. With a quickly growing global population, especially since the turn of the 20th century, the impact of anthropocentric environmentalism on the biosphere became increasingly significant. The philosophic idea of "deep ecology" is that our ecosystem is formed by interrelationships between many organisms that depend on each other.`
      },
      {
        type: 'blockquote',
        content: `[..] "it recognizes diverse communities of life on Earth that are composed not only through biotic factors but also, where applicable, through ethical relations, that is, the valuing of other beings as more than just resources."

Smith, Mick (2014). "Deep Ecology: What is Said and (to be) Done?"`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_07.webp',
        alt: 'Hydrology Map'
      },
      {
        type: 'text',
        content: `According to the International Institute of Water Management in Kathmandu, Nepal has 2.7 % of the available fresh water on Earth, making it the second country, after Brazil, with more water reserves in the world. The 8.6 million cubic meters of water that flow from the Himalaya peaks through the Nepali valleys every year provide each of its inhabitants an annual availability of 9000 cubic meters (9 million liters). This is one of the highest rates in the world, much higher, for instance, than the one in India, which reaches 1431 cubic meters.

The thaw of nearly 3000 glaciers and lakes in the highest mountains of the Earth feeds over 6000 rivers and streams that flow through the Nepal valleys. This enormous flow supplies water to over one Billion inhabitants downstream, in India and Pakistan. However, nearly 5 million inhabitants of Nepal, 18% of the population, do not have access to safe sources of drinking water, and 30.9% lives below the poverty threshold, according to data of the United Nations Development Program.

Since 27% of the population in Nepal does not have access to improved sanitation the excisting surface water is exposed to pollution through industry, agriculture as well as the discharge of untreated sewage from dense urban areas, making it unsuitable as a safe souce of drinking water. As a result ground water is becoming the major source of drinking water putting an immense stress on the ground water levels and the ecology depending on it. Looking at the land distribution and rate of urban sprawl in the metropolitain region of Kathmandu it becomes obvious that this trend is likely to worsen if no countervailing measures are undertaken.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_06.webp',
        alt: 'Erosion Analysis'
      },
      {
        type: 'text',
        content: `This map of the Kathmandu valley was modified with different erosion techniques to enhance the awareness how the process of water dynamics and the accompanying morphology of the landscape behaves over time. Additionally the shading of the map conveys information about the slope of the topography reduced to a black and white image. The lightest areas represent the steepest slopes and therefore the highest rates of surface water runoff. On the other hand the black areas depict the rather flat areas with slower surface water runoff allowing higher rates of groundwater recharge. this map lets us conceive valuable information about hydromophological processes independently from human interventions.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_03.webp',
        alt: 'Human Settlements'
      },
      {
        type: 'text',
        content: `Over the course of the past century the human impact on the environment became increasingly significant, making it impossible to analyse hydrological processes without involving human networks. This map adds the Anthropocene as an extra layer of information involving houses and street networks. unfortunately the areas with the highest potential for groundwater recharge are also the areas best suited for urban development, leading to a negative effect on the hydrology. The sealing of the soil surface not only leads to an increased surface water run-off and lowering of the groundwater level but also to a higher risk of flooding.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_02.webp',
        alt: 'Hydrology Valley'
      },
      {
        type: 'text',
        content: `Since water is the main impulse of morphologic processes of the topography and the source for all living beings (humand as well as non-human) it is vital to set it in the focus of attention when trying to develop a new strategy of a sustainable urban sprawl. It is important to understand where the water comes from and what the major influences on the water quality are. This drawing illustrates how the water quality decreases depending on the density of the built-up urban environment. Clarifying these hydromophological processes and using them as a base map is used as a foundation for the development of a new network that allows human and non-human networks to interact with each other to form a "true democracy" that incorporates nature as a indispensable part of the world we live in.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_05.webp',
        alt: 'Zoom NE'
      },
      {
        type: 'text',
        content: `My proposal aims to show an alternative city distribution that is designed based on different data inputs from my analysis. The goal of this redistribution is to reduce the stress on the surface water quality caused by pollution, offering a safe source of drinking water for the people of Kathmandu as well as reducing the risks of flooding and landslides.

For this to work, a water distribution system is needed that allows me to freely distribute water to any desired point of the Valley. I was inspired by the "Water Elevating Towers", a low tech approach that has been used in the late 19th century in Tamesloht, Morocco. It is an alternative to an Aqueduct that uses the hydrostatic pressure to transport water from one side of a valley to another. I adapted this linear approach of transporting water to apply to the 3D topography of the Kathmandu Valley.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_08.webp',
        alt: 'Calculations'
      },
      {
        type: 'text',
        content: `A script was developed to calculate local high and low points on the topography through a flow line analysis. Water is absorbed at the low points and transported to the next high points at a lower elevation through hydro-static pressure. from these locations water can be redistributed again to its surrounding environment to provide a safe source of water to households as well as agriculture. As a result we get a network for a water distribution system that can cover the entire Kathmandu Valley without any additional input of energy.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_09.webp',
        alt: 'Distribution Network'
      },
      {
        type: 'text',
        content: `Furthermore these calculated connections are adapted to the topography, using machine learning, to translate this diagrammatic data into an artificial landscape that entirely follows the hydrology of the Kathmandu Valley.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hydromorphology/hydromorphology_04.webp',
        alt: 'Cycle GAN'
      },
      {
        type: 'text',
        content: `This data based transformation of the landscape represents an optimized distribution of the existing landscape. As you can see all the many steep parts of the topography which are the most vulnerable to landslides are now overgrown by vegetation to prevent them to further erode and cause economic damage to the inhabitants. At the same time the river course is optimized to the flow behaviour offering retention areas where water can accumulate, allowing groundwater recharge, to improve the overall hydrology of the valley. The distribution of the urban environment also follows the course of the flow lines making the whole city act as a drainage system. This allows a water distribution without any external input of energy which makes it safer against water related disasters.`
      },
      {
        type: 'link-button',
        url: 'https://issuu.com/syntheticlandscapelab/docs/hydromorphology_korbinianenzinger_masterthesis_lq_',
        label: 'READ FULL BOOK'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/Uedd-MwTV1M'
      },
      {
        type: 'gallery',
        items: [
          {
            type: 'image',
            src: 'https://picsum.photos/id/310/600/400'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/311/600/400'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/312/600/400'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/313/600/400'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/314/600/400'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/315/600/400'
          }
        ]
      }
    ],
    featured: false
  },
  {
    id: 'synthetic-swarm',
    title: 'Synthetic Swarm',
    category: 'Work | Installation',
    date: 'October 2022',
    subtitle: 'Piding\nArtist: Korbinian Enzinger\nProject Team: Martin Rohrmoser, Robert Enzinger',
    description: `Piding, Germany`,
    imageUrl: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/T1.webp',
    credits: `Project by: Korbinian Enzinger
Software and Sensoring system: Martin Rohrmoser, Robert Enzinger
Hardware and Electric Work: Robert Enzinger, Korbinian Enzinger
3D Printing: Korbinian Enzinger, Sigrid Enzinger
Setup support: Sigrid Enzinger, Mathias Reiter, Sarina Reiter, Michael Huber
Commissioned by: Kunstakademie Bad Reichenhall
Christiane Pott-Schlager, Hubert Grassl, Stefan Wimmer, Traudi Koller`,
    content: [
      {
        type: 'text',
        content: `The topic and the associated field of tension between climate and nature has been intensively addressed for several decades in many areas of industry, business, architecture, etc., in an attempt to find solutions to various "problems". From a human perspective, these problems manifest themselves in the form of extreme weather events such as droughts, floods or tornadoes, which directly harm us economically or in terms of health. However, issues such as climate change and sustainability are much broader and require a holistic understanding of the interaction between human actions and natural processes.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/01.webp',
        alt: 'Swarm Detail'
      },
      {
        type: 'text',
        content: `Ecosystems, whether local in the Berchtesgadener Land or global, are dynamic systems. This means that they are constantly changing in order to adapt to changing environmental conditions. Especially since the beginning of industrial revolution in the 1800s, the start of the Anthropocene, it has become clear that humanity plays a key role in the development of the climate due to population growth and technological innovations. It has largely proven true that the speed of technological development is exponential, and thus the tension between "technological evolution" and "biological evolution" continues to grow. On the one hand, technological innovations in science help us to perceive our environment more accurately and to design processes more efficiently; on the other hand, these innovations are also part of the problem we are trying to combat today.`
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/06.webp',
            alt: 'Swarm 1'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/05.webp',
            alt: 'Swarm 2'
          }
        ]
      },
      {
        type: 'text',
        content: `The aim of art in this case cannot be to provide technical solutions to the effects of climate change, but it can and should broaden the perception of different processes. Processes that can be natural as well as artificial, material as well as immaterial`
      },
      {
        type: 'text',
        content: `The installation is intended to show that change will inevitably take place, but that we as humans have the opportunity and also the responsibility to guide it. It is necessary not only to place human needs at the centre of change, but also to give nature a voice and respond to its needs.`
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/D1.webp',
            alt: 'Swarm Module'
          },
          {
            type: 'text',
            content: `The structure is made using 3D printing, a technology that has become very popular in recent years. On the one hand, this technology offers design possibilities that were previously unthinkable, on the other hand, the issue of sustainability must be critically examined.

Compared to conventional 3D printing techniques, which are usually associated with a large amount of infill material, the three-dimensionality of this structure is generated exclusively by tensioning a two-dimensional geometry. This has the decisive advantage that each of the 850 modules weighs only approx. 0.5 - 1.5 g, having an amazing inherent stability due to the curved geometry and are able to adapt to almost any surface due to the flexibility of the material.

Non-toxic, biodegradable ecoPLA is used for the installation, which, due to its materiality and organic morphology, also intensifies the discourse on the areas of tension between humans, nature and the climate.`
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/D2.webp',
            alt: 'Swarm Geometry'
          },
          {
            type: 'text',
            content: `This image illustrates how a complex three-dimensional structure is formed from an apparently simple initial geometry. Parameters such as the strength of the prestressing, the geometry of the subsoil or the combination of several modules influence the final morphology of the "swarm", which gives the installation its own character depending on its location.`
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/04.webp',
            alt: 'Swarm Detail 3'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/03.webp',
            alt: 'Swarm Detail 4'
          }
        ]
      },
      {
        type: 'text',
        content: `With the help of the installation, sensory signals from the environment (temperature, movement, sound, brightness etc.) are recorded and reflected by a light system integrated into the 3D printed structure. Each one of the 850 3D-printed modules is illuminated by LEDs, which are individually controlled by a central processor unit. Furthermore, a custom code uses these inputs, which are not perceptible to us humans, and visualizes them in form of organically moving patterns of light. In this way, the "synthetic swarm" is transformed into a medium that directly enables a communication between humans and nature. On the one hand, the structure looks like a synthetic, parasitic organism that emerged as a consequence of rapid technological evolution, on the other hand, it offers a completely new way of communication between us and our environment.`
      },
      {
        type: 'text',
        content: `This synthetic organism does not claim to solve a problem, but it does provoke a broader discourse on how we can perceive our environment, deal with change, and use technology to symbiotically evolve with nature rather than working against it.

For more impressions of the installation click on the gallery below!`
      },
      {
        type: 'gallery',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/ssh01.webp'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/ssh02.webp'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/ssh03.webp'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/ssh04.webp'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/ssh05.webp'
          },
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/SyntheticSwarm/ssh06.webp'
          }
        ]
      }
    ],
    featured: false
  },
  {
    id: 'hyph',
    title: 'Hyph',
    category: 'Design | Biodesign',
    date: 'March 2023',
    subtitle: 'Innsbruck\nArtists: Maria Kuptsova, Korbinian Enzinger, Riccardo Mangili, Emiliano Rando',
    description: `Innsbruck, Austria`,
    imageUrl: 'https://storage.googleapis.com/mutualism-media/Hyph/HyphBanner.webp',
    credits: `Bioprinted Design: Maria Kuptsova, Riccardo Mangili, Korbinian Enzinger, Emiliano Rando
Text: Maria Kuptsova
Printer engineering: Riccardo Mangili
Photos and Renderings: Korbinian Enzinger`,
    content: [
      {
        type: 'text',
        content: `HYPH is a cyborganic fungi garden grown in an urban environment in a bio-artificial way. It is a productive and regenerative system that materialises in the form of synthetic hybrids endowed with biological life. HYPH embodies a scenario that leads to a more sustainable and productive food industry in urban environments, offering variations of art objects, each one formalising a micro or macro garden to grow specific mycelial and fungal varieties specific to the local environment.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hyph/HyphBanner.webp',
        alt: 'Fungal growth'
      },
      {
        type: 'text',
        content: `For Gilles Clement, the garden "is a process of formalised transmission of biological messages" (Gilles Clement, Il giardiniere planetario, 2008), which today can be achieved through algorithmic coding. Algorithms become machines for the "gardener" to breed biodiversity. Understanding aesthetics as an intrinsic ecological property, HYPH explores biological patterns and materials as a form of artistic language for realising sculptural objects through digital design and production techniques.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hyph/HyphPrint01.webp',
        alt: 'Hyph Print'
      },
      {
        type: 'text',
        content: `HYPH proposes to change the aesthetics and ethics of food production. Instead of enclosed and out-of-town greenhouses and farms, HYPH explores scenarios where climate-specific fruits grow in urban environments, creating a new aesthetic for urban spaces. Following the climatic characteristics of Russian cities, as well as Russian culinary traditions and mushroom picking customs, HYPH proposes to integrate fungi gardens into the public spaces of our cities. "Every city dweller becomes a gardener" (Gilles Clement, 2008) or in the particular case a mushroom grower, being in constant relationship with the processes of growth, cultivation and harvesting. The urban dweller no longer buys packaged mushrooms in the supermarket, but can grow the necessary fruit himself or follow the processes of growth. Environmental ecology is a key factor and focus in such a scenario, as humans need to control pollution in the ecosystem in order to produce food.

Mycelium, in addition to providing a resource for human sustenance, plays an important role in the ecosystem as it helps to break down organic matter, recycle nutrients and form symbiotic relationships with plants and other organisms. Fungi can detect and respond to changes in temperature, humidity and nutrient availability by changing their growth patterns and behaviour. Fungi can also serve as indicators of environmental health. Because they are sensitive to changes in air and water quality, they can be used to monitor toxins or other pollutants in urban environments.`
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hyph/HyphCatalogue.webp',
        alt: 'Hyph Catalogue'
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Hyph/Part01.gif',
            alt: 'Growth I'
          },
          {
            type: 'text',
            content: `One of the best-known examples of mycorrhizal relationships is that between trees and fungi. Trees and fungi are in a mutuallyistic relationship, with the fungus getting sugars from the tree and the tree getting water and minerals from the fungus. The mycelium also has the ability to connect different trees and plants together through a "mycorrhizal network" (Frank, 1885), enabling the exchange of resources (water, nitrogen, carbon and other minerals) and information between the plants.`
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Hyph/Part02.gif',
            alt: 'Growth II'
          },
          {
            type: 'text',
            content: `HYPH redefines the relationship between trees and fungi in a new synthetic form. HYPH uses wood chips and mycelium as the basic building materials for art sculptures. The mushroom and wood varieties are selected according to the logic of their relationships in the natural local environment. The bio-programming process helps to extract the organisational principles of the mushroom mycelium and fix them in the form of a spatial topology. Fabrication techniques, such as additive manufacturing, allow the development of adaptive sculpting techniques based on research into material behaviour.`
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://storage.googleapis.com/mutualism-media/Hyph/Part03.gif',
            alt: 'Growth III'
          },
          {
            type: 'text',
            content: `Biomaterial based on shavings from wood waste is used for large scale 3d printing, suggesting a new regenerative life cycle of matter from wood in its living state to recycled wood material. This material is fully biodegradable and provides an excellent basis for mycelial growth on the surface of structures. At the time of 3D printing, mycelium spores are planted inside the printed structure. Sprouting through the walls of the sculptures, the mycelium compacts the printed wood structure with its nets and creates its own micro-environment for the growth of fruiting fungal bodies. The new materiality remembers the tactility and smell of wood and mycelium, integrating them into a new form and relationship. The aesthetic form of the sculptures embodies ecological agency.`
          }
        ]
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hyph/CeilingInstallation.webp',
        alt: 'Ceiling Installation'
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hyph/WallInstallation.webp',
        alt: 'Wall Installation'
      },
      {
        type: 'image',
        src: 'https://storage.googleapis.com/mutualism-media/Hyph/MushroomInstallation.webp',
        alt: 'Mushroom Installation'
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'gelu',
    title: 'GELU',
    category: 'Research | Patterns',
    date: 'March 2024',
    description: `Exploration of glacial melting patterns.`,
    imageUrl: 'https://picsum.photos/id/1020/1920/1080',
    hasIntro: true,
    introVideoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    content: [
      {
        type: 'video',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      },
      {
        type: 'text',
        content: `GELU delves into the nature of glitches as both disruptors and generators of aesthetic experience. The work studies the transformative process shaped at the interplay between natural processes and nuances of technological innovation. Focusing on the profound environmental glitch of melting glaciers, we aim to capture the essence of this phenomenon through a dynamic artistic exploration that intertwines digital technology with natural elements.`
      }
    ]
  },
  {
    id: 'corallium',
    title: 'Corallium',
    category: 'Technique | 3D Printing',
    date: 'February 2024',
    description: `3D printing technique exploration.`,
    imageUrl: 'https://picsum.photos/id/1021/1920/1080',
    content: [
      {
        type: 'image',
        src: 'https://picsum.photos/id/601/1200/800',
        alt: 'Corallium 1'
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://picsum.photos/id/602/600/600',
            alt: 'Corallium 2'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/603/600/600',
            alt: 'Corallium 3'
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://picsum.photos/id/604/600/600',
            alt: 'Corallium 4'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/605/600/600',
            alt: 'Corallium 5'
          }
        ]
      }
    ],
    featured: false
  },
  {
    id: 'miscibility',
    title: 'Miscibility',
    category: 'Research | Patterns',
    date: 'January 2024',
    description: `Study of fluid dynamics.`,
    imageUrl: 'https://picsum.photos/id/1022/1920/1080',
    hasIntro: true,
    introVideoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    content: [
      {
        type: 'video',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
      }
    ],
    featured: false
  },
  {
    id: 'artificial-morphologies',
    title: 'Artificial Morphologies',
    category: 'Research | Patterns',
    date: 'January 2024',
    description: `AI generated landscape patterns.`,
    imageUrl: 'https://picsum.photos/id/1023/1920/1080',
    content: [
      {
        type: 'text',
        content: `"Artificial Morphologies" is a speculative exploration how patterns and material interactions on a microscopic scale could inform new landscape morphologies though the applicatioon of various AI tools.`
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://picsum.photos/id/701/600/600',
            alt: 'Salt Micro'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/702/600/600',
            alt: 'Salt AI'
          }
        ]
      },
      {
        type: 'grid-2-col',
        items: [
          {
            type: 'image',
            src: 'https://picsum.photos/id/703/600/600',
            alt: 'Salt Micro 2'
          },
          {
            type: 'image',
            src: 'https://picsum.photos/id/704/600/600',
            alt: 'Salt AI 2'
          }
        ]
      }
    ],
    featured: false
  },
  {
    id: 'aquatic-morphologies',
    title: 'Aquatic Morphologies',
    category: 'Research | Patterns',
    date: 'August 2023',
    description: `Exploration of landscape patterns through satellite imagery.`,
    imageUrl: 'https://picsum.photos/id/1024/1920/1080',
    content: [
      {
        type: 'text',
        content: `"Aquatic Morphologies" is a exploration of landscape patterns through high resolution satellite images. The selected areas (marked with their geo-locations) depict a set of landscapes which have been altered by hydrologic processes.`
      }
    ]
  },
  {
    id: 'terrestrial-morphologies',
    title: 'Terrestrial Morphologies',
    category: 'Research | Patterns',
    date: 'August 2023',
    description: `Formal exploration of landscape patterns.`,
    imageUrl: 'https://picsum.photos/id/1025/1920/1080',
    content: [
      {
        type: 'text',
        content: `"Terrestrial Morphologies" is a formal exploration of landscape patterns through high resolution satellite images.`
      }
    ]
  },
  {
    id: 'differential-growth',
    title: 'Differential Growth',
    category: 'Research | Technique',
    date: 'March 2023',
    description: `Exploration of growth algorithms.`,
    imageUrl: 'https://picsum.photos/id/1026/1920/1080',
    content: [
      {
        type: 'image',
        src: 'https://picsum.photos/id/910/1200/800',
        alt: 'DG Structure 1'
      }
    ],
    featured: false
  },
  {
    id: 'bryophyta',
    title: 'Bryophyta',
    category: 'Research | Application',
    date: 'February 2021',
    description: `Moss metabolism apparatus.`,
    imageUrl: 'https://picsum.photos/id/1027/1920/1080',
    content: [
      {
        type: 'text',
        content: `Bryophyta is an apparatus which uses the specific metabolism of mosses in order to regulate climate conditions.`
      }
    ]
  },
  {
    id: 'fluctus',
    title: 'Fluctus',
    category: 'Research | Patterns',
    date: 'January 2021',
    description: `Water surface patterns.`,
    imageUrl: 'https://picsum.photos/id/1028/1920/1080',
    content: [
      {
        type: 'text',
        content: `Photographic exploration of various morphologies water surfaces.`
      }
    ]
  },
  {
    id: 'particle-sandbox',
    title: 'Particle Sandbox',
    category: 'Technique | Research',
    date: 'February 2020',
    description: `Digital lab for particle systems.`,
    imageUrl: 'https://picsum.photos/id/1029/1920/1080',
    content: [
      {
        type: 'text',
        content: `An urban network has properties of emergence meaning that the entity of a system shows characteristics that an individual part of it does not.`
      }
    ]
  },
  {
    id: 'sand',
    title: 'Sand',
    category: 'Photography | Research',
    date: 'February 2020',
    description: `Morphologies formed by sand.`,
    imageUrl: 'https://picsum.photos/id/1030/1920/1080',
    content: [
      {
        type: 'gallery',
        items: [
          {
            type: 'image',
            src: 'https://picsum.photos/id/950/1200/800',
            alt: 'Sand 1'
          }
        ]
      }
    ]
  },
  {
    id: 'reaction-diffusion',
    title: 'Reaction Diffusion',
    category: 'Technique | Research',
    date: 'December 2019',
    description: `Turing patterns in nature.`,
    imageUrl: 'https://picsum.photos/id/1031/1920/1080',
    content: [
      {
        type: 'text',
        content: `The process of Reaction-Diffusion is the next step from a deterministic system.`
      }
    ]
  },
  {
    id: 'tessellation',
    title: 'Tessellation',
    category: 'Technique | Research',
    date: 'October 2019',
    description: `Computational design growth patterns.`,
    imageUrl: 'https://picsum.photos/id/1032/1920/1080',
    content: [
      {
        type: 'text',
        content: `The formation of an urban landscape like the Kathmandu Valley consists of two contrary processes.`
      }
    ]
  }
];

export const BIO_TEXT = `I'm an artist, architect, researcher and educator. After completing my Master degree in Architecture at the University of Innsbruck I've been working as a computational designer for EcoLogicStudio in London developing Projects which have been exhibited at the Centre Pompidou in Paris, Copernicus Science Centre in Warsaw, Biennale Architectura in Venice as well as the COP26 Climate Summit in Glasgow.

Currently I'm working as a Senior Lecturer at the Synthetic Landscape Lab, Institute of Urban Design in Innsbruck, teaching design courses and developing academic projects in various scales.

My research focuses on the intersection of Architecture and Biology with the goal of creating mutualistic relationships between human and non-human entities.`;

export const BIO_IMAGE = 'https://picsum.photos/id/1025/400/600';

export const PHILOSOPHY_TEXT = `Mutualism between human and non-human starts with ecological awareness. To realize that life on earth is only possible through the interaction and synergy between millions or even billions of different organisms that inhabit it.

The goal is to evolve our common and mostly rigid understanding of architecture and develope design solutions which are able to change the way we interact with our environment with the ultimate goal of a mutualistic relationship between human and non-human instead of a parasitic one.`;
