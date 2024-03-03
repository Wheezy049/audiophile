 import earphone from './earphone.png'
 import earphone_2 from './earphone_2.png'
 import earphone_3 from './earphone_3.png'
 import earphone_4 from './earphone_4.png'
import speaker from './speaker.png'
import speaker_2 from './speaker_2.png'
import speaker_3 from './speaker_3.png'
import speaker_4 from './speaker_4.png'
import speaker_5 from './speaker_5.png'
import speaker_6 from './speaker_6.png'
import speaker_7 from './speaker_7.png'
import speaker_8 from './speaker_8.png'
import headset from './headset.png'
import headset_2 from './headset-2.png'
import headset_3 from './headset_3.png'
import headset_4 from './headset_4.png'
import headset_5 from './headset_5.png'
import headset_6 from './headset_6.png'
import headset_7 from './headset_7.png'
import headset_9 from './headset_9.png'
import headset_8 from './headset_8.png'
import headset_10 from './headset_10.png'
import headset_11 from './headset_11.png'
import review from './review.png'



let all_product = [
 {
  id: 1,
  new: 'new product',
  price: '2,999',
  name: 'xx99 mark ii',
  type: 'headphones',
  para: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  desc: `
           Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
           The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
          `,
  count1: '1x',  
  text1: 'Headphone Unit',    
  count2: '2x',   
  text2: 'Replacement Earcups',   
  count3: '1x',
  text3: 'User Manual',      
  count4: '1x', 
  text4: '3.5mm 5m Audio Cable',    
  count5: '1x',
  text5: 'Travel Blog',      
  image: {
   image1: headset_4,
   image2: review,
   image3: headset_5,
   image4: headset,
   image5: {
        img: headset_2,
        name: 'xx99 mark i'
   },
   image6: {
        img: headset_3,
        name: 'xx59'
   },
   image7: {
       img: speaker,
       name: 'zx9' 
   }
  },
 },
 {
  id: 2,
  price: '1,750',
  name: 'xx99 mark i',
  type: 'headphones',
  para: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
  desc: ` 
          As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
          From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
        `,
  count1: '1x',  
  text1: 'Headphone Unit',    
  count2: '2x',   
  text2: 'Replacement Earcups',   
  count3: '1x',
  text3: 'User Manual',      
  count4: '1x', 
  text4: '3.5mm 5m Audio Cable',    
  image: {
   image1: headset_2,
   image2: headset_6,
   image3: headset_7,
   image4: headset_9,
   image5: {
       img: headset_4,
       name: 'xx99 mark ii' 
   },
   image6: {
        img: headset_3,
        name: 'xx59'
   },
   image7: {
       img: speaker,
       name: 'zx9' 
   }
  },
 },
 {
  id: 3,
  price: '899',
  name: 'xx59',
  type: 'headphones',
  para: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  desc: `
        These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
        More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
        `,
  count1: '1x',  
  text1: 'Headphone Unit',    
  count2: '2x',   
  text2: 'Replacement Earcups',   
  count3: '1x',
  text3: 'User Manual',      
  count4: '1x', 
  text4: '3.5mm 5m Audio Cable',    
  image: {
   image1: headset_3,
   image2: headset_8,
   image3: headset_10,
   image4: headset_11,
   image5: {
       img: headset_4,
       name: 'xx99 mark ii' 
   },
   image6: {
       img: headset_2,
       name: 'xx99 mark i' 
   },
   image7: {
       img: speaker,
       name: 'zx9' 
   }
  },
 },
 {
  id: 4,
  new: 'new product',
  price: '4,500',
  name: 'zx9',
  type: 'speakers',
  para: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
  desc: `
         Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
         Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
        `,
  count1: '2x',  
  text1: 'Speaker Unit',    
  count2: '2x',   
  text2: 'Speaker Cloth Panel',   
  count3: '1x',
  text3: 'User Manual',      
  count4: '1x', 
  text4: '3.5mm 10m Audio Cable',    
  count5: '1x',
  text5: '10m Optical Cable', 
  image: {
   image1: speaker,
   image2: speaker_4,
   image3: speaker_5,
   image4: speaker_6,
   image5: speaker_3,
   image6: {
       img: headset_2,
       name: 'xx99 mark i' 
   },
   image7: {
        img: headset_3,
        name: 'xx59'
   }
  },
 },
 {
  id: 5,
  price: '3,700',
  name: 'zx7',
  type: 'speakers',
  para: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
  desc: `
        Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
        The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
         `,
  count1: '2x',  
  text1: 'Speaker Unit',    
  count2: '2x',   
  text2: 'Speaker Cloth Panel',   
  count3: '1x',
  text3: 'User Manual',      
  count4: '1x', 
  text4: '3.5mm 7.5m Audio Cable',    
  count5: '1x',
  text5: '7.5m Optical Cable',   
  image: {
   image1: speaker_3,
   image2: speaker_7,
   image3: speaker_8,
   image4: speaker_2,
   image5: {
       img: speaker,
       name: 'zx9' 
   },
   image6: {
       img: headset_2,
       name: 'xx99 mark i' 
   },
   image7: {
        img: headset_3,
        name: 'xx59'
   }
  },
 },
 {
  id: 6,
  new: 'new product',
  price: '599',
  name: 'yx1 wireless',
  type: 'earphones',
  para: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
  desc: `
         Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
         The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
        `,
  count1: '2x',  
  text1: 'Earphone Unit',    
  count2: '6x',   
  text2: 'Multi-size Earplugs',   
  count3: '1x',
  text3: 'User Manual',      
  count4: '1x', 
  text4: 'USB-C Charging Cable',    
  count5: '1x',
  text5: 'Travel Pounch',   
  image: {
   image1: earphone,
   image2: earphone_3,
   image3: earphone_2,
   image4: earphone_4,
   image5: {
       img: headset_2,
       name: 'xx99 mark i' 
   },
   image6: {
        img: headset_3,
        name: 'xx59'
   },
   image7: {
       img: speaker,
       name: 'zx9' 
   }
  },
 }
]

export default all_product