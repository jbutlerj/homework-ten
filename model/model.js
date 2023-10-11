// variable declarations
// page titles
var homeTitle =`travel-fly | home`;
var aboutTitle =`travel-fly | about`;
var toursTitle =`travel-fly | tours`;
var specialOffersTitle =`travel-fly | special-offers`;
var blogTitle =`travel-fly | blog`;
var contactTitle =`travel-fly | contact`;
var tourIsraelTitle =`travel-fly | Israel`;
var tourUSATitle =`travel-fly | U.S.A.`;
var tourAustrailiaTitle =`travel-fly | Austrailia`;
var tourNewZealandTitle =`travel-fly | New Zealand`;
var tourFranceTitle =`travel-fly | France`;
var tourEgyptTitle =`travel-fly | Egypt`;
var tourJapanTitle =`travel-fly | Japan`;
var tourCanadaTitle =`travel-fly | Canada`;
var tourUAETitle =`travel-fly | U.A.E.`;

// html content for #app
var homeContent = `<div class="home">
<!-- hero section -->
<section class="hero">
  <!-- hero callout -->
  <div class="callout">
    <div class="wordmark"><span>travel-fly</span></div>
    <h1>travel-fly</h1>
    <h4>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nostrum quia vero consectetur dignissimos inventore. Dolorem.
    </h4>
    <a href="#">
      <div class="read-more"><span>read more</span></div>
    </a>
  </div>
</section>

<!-- trips sections -->
<section class="promo-trips">
  <div class="tile-container">
    <!-- trip tile -->
    <div class="trip-tile-1">
      <div class="top">
        <h1>Israel</h1>
        <h3>from $1000</h3>
      </div>
      <div class="bottom">
        <a id="tourIsrael" href="#"
          ><div class="learn-more">learn more</div></a
        >
      </div>
    </div>

    <!-- trip tile -->
    <div class="trip-tile-2">
      <div class="top">
        <h1>U.S.A</h1>
        <h3>from $1500</h3>
      </div>
      <div class="bottom">
        <a id="tourUSA" href="#"
          ><div class="learn-more">learn more</div></a
        >
      </div>
    </div>

    <!-- trip tile -->
    <div class="trip-tile-3">
      <div class="top">
        <h1>Austrailia</h1>
        <h3>from $1800</h3>
      </div>
      <div class="bottom">
        <a id="tourAustrailia" href="#"><div class="learn-more">learn more</div></a
        >
      </div>
    </div>
  </div>
</section>

<!-- booking section -->
<section class="booking" id="booking-form">
  <div class="booking-wrapper">
    <h1><span>B</span>ooking Form</h1>
    <form>
      <div class="input-row">
        <div class="short-input">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name..."
          />
        </div>
        <div class="long-input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email..."
          />
        </div>
      </div>
      <div class="input-row">
        <div class="short-input">
          <input
            type="text"
            name="country"
            id="country"
            placeholder="country..."
          />
        </div>
        <div class="long-input">
          <input
            type="text"
            name="hotel"
            id="hotel"
            placeholder="hotel..."
          />
        </div>
      </div>
      <div class="date-row">
        <label for="check-in">Check-in</label>
        <input type="date" id="check-in" />
      </div>
      <div class="date-row">
        <label for="check-out">Check-out</label>
        <input type="date" id="check-out" />
      </div>
      <div class="dd-row">
        <div class="adult">
          <label for="adult">Adults</label>
          <select id="adult" name="adult">
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div class="children">
          <label for="children">Children</label>
          <select id="children" name="children">
            <option value="-">-</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div class="rooms">
          <label for="rooms">Rooms</label>
          <select id="rooms" name="rooms">
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
      <div class="textarea">
        <textarea name="message" placeholder="message..."></textarea>
      </div>
      <div class="button-row">
        <a href="#"><div class="subBTN">submit</div></a>
      </div>
    </form>
  </div>
</section>
</div>`;
var aboutContent = `<section class="about">
<h1><span>abou</span>t:</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
  tempora minus quas maxime perferendis aut quos itaque fugiat sed
  facilis molestias, accusamus consequatur quam reiciendis saepe
  sapiente voluptatem ex ratione in vero qui! Laboriosam, sequi eum
  tenetur ex, maxime quas esse dolores nam explicabo consequuntur
  asperiores, dignissimos reprehenderit reiciendis repellendus?
</p>
</section>

<!-- client quotes section -->
<section class="quotes">
<h2><span>client quo</span>tes:</h2>
<!-- client 1 -->
<div class="container">
  <div class="image">
    <img src="images/miranda-brown.png" alt="Miranda Brown" />
  </div>
  <div class="quote-container">
    <div class="quote">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Corporis maxime id eius possimus sapiente aliquam, nam magnam
        dolor libero iure nemo non, facere inventore! Inventore quos
        repellendus iste cum reiciendis.
      </p>
    </div>
    <div class="name">
      <h5>- Miranda Brown</h5>
    </div>
  </div>
</div>
<!-- client 2 -->
<div class="container">
  <div class="image">
    <img src="images/johnathan-west.png" alt="Miranda Brown" />
  </div>
  <div class="quote-container">
    <div class="quote">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Corporis maxime id eius possimus sapiente aliquam, nam magnam
        dolor libero iure nemo non, facere inventore! Inventore quos
        repellendus iste cum reiciendis.
      </p>
    </div>
    <div class="name">
      <h5>- Johnathan West</h5>
    </div>
  </div>
</div>
</section>`;
var toursContent = `<div class="tours">
<!-- hero -->
<section class="hero">
  <h1>tours:</h1>
</section>

<!-- tour grid -->
<section class="tour-grid">
  <!-- trip tile -->
  <div class="trip-tile-1">
    <div class="top">
      <h1>Israel</h1>
      <h3>from $1000</h3>
    </div>
    <div class="bottom">
      <a id="tourIsrael" href="#"><div class="learn-more">learn more</div></a>
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-2">
    <div class="top">
      <h1>U.S.A</h1>
      <h3>from $1500</h3>
    </div>
    <div class="bottom">
      <a id="tourUSA" href="#"><div class="learn-more">learn more</div></a>
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-3">
    <div class="top">
      <h1>Austrailia</h1>
      <h3>from $1800</h3>
    </div>
    <div class="bottom">
      <a id="tourAustrailia" href="#"
        ><div class="learn-more">learn more</div></a
      >
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-4">
    <div class="top">
      <h1>New Zealand</h1>
      <h3>from $1200</h3>
    </div>
    <div class="bottom">
      <a id="tourNewZealand" href="#"
        ><div class="learn-more">learn more</div></a
      >
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-5">
    <div class="top">
      <h1>France</h1>
      <h3>from $2500</h3>
    </div>
    <div class="bottom">
      <a id="tourFrance" href="#"><div class="learn-more">learn more</div></a>
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-6">
    <div class="top">
      <h1>Egypt</h1>
      <h3>from $900</h3>
    </div>
    <div class="bottom">
      <a id="tourEgypt" href="#"><div class="learn-more">learn more</div></a>
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-7">
    <div class="top">
      <h1>Japan</h1>
      <h3>from $1300</h3>
    </div>
    <div class="bottom">
      <a id="tourJapan" href="#"><div class="learn-more">learn more</div></a>
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-8">
    <div class="top">
      <h1>Canada</h1>
      <h3>from $2000</h3>
    </div>
    <div class="bottom">
      <a id="tourCanada" href="#"><div class="learn-more">learn more</div></a>
    </div>
  </div>

  <!-- trip tile -->
  <div class="trip-tile-9">
    <div class="top">
      <h1>U.A.E</h1>
      <h3>from $3000</h3>
    </div>
    <div class="bottom">
      <a id="tourUAE" href="#"><div class="learn-more">learn more</div></a>
    </div>
  </div>
</section>
</div>`;
var specialOffersContent = `<section class="offers">
<h1><span>special of</span>fer(s):</h1>

<!-- offer wrapper -->
<div class="offer-wrapper">

  <!-- image -->
  <div class="image"><img src="images/tours/barcelona/barcelona.jpg" alt="Barcelona"></div>

  <!-- text -->
  <div class="text-container">
    <div class="text-top">
      <h1>
        <span class="line">barcelon</span>a, spain<span class="gap">          </span><span class="discount">(20% off!)</span>
      </h1>
      <h5>(20% off!)</h5>
    </div>
    <div class="text-mid">  
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptates ducimus cum tenetur omnis provident officiis laborum
      similique. Adipisci accusamus asperiores eligendi exercitationem
      minus, autem nulla. Labore quam corrupti distinctio quas?
      </p>
    </div>

    <!-- button -->
    <div class="button-container">
      <a href="#"">
      <div class="deal-button">learn more</div>
     </a>
    </div>
  </div>
</div>

<!-- offer wrapper -->
<div class="offer-wrapper">

  <!-- image -->
  <div class="image"><img src="images/tours/bangkok/bangkok.jpg" alt="Bangkok"></div>

  <!-- text -->
  <div class="text-container">
    <div class="text-top">
      <h1>
        <span class="line">bangkok, t</span>hailand<span class="gap">          </span><span class="discount">(10% off!)</span>
      </h1>
      <h5>(10% off!)</h5>
    </div>
    <div class="text-mid">  
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptates ducimus cum tenetur omnis provident officiis laborum
      similique. Adipisci accusamus asperiores eligendi exercitationem
      minus, autem nulla. Labore quam corrupti distinctio quas?
      </p>
    </div>

    <!-- button -->
    <div class="button-container">
      <a href="#"">
      <div class="deal-button">learn more</div>
     </a>
    </div>
  </div>
</div>
</section>`;
var blogContent = `<section class="blog">
<h1><span>blog:</span></h1>

<!-- post container -->
<div class="post-container">
  <div class="left">
    <div class="date">
      <h5>06</h5>
      <h6>jun</h6>
    </div>
  </div>
  <div class="right">
    <div class="hero"></div>
    <div class="text">
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h6>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consequuntur et quia atque ipsum iure? Autem asperiores error
        repellat assumenda, at perspiciatis veniam culpa consequuntur
        deserunt, quibusdam reiciendis dolorem optio nemo non maxime
        est temporibus dolore!
      </p>
    </div>
  </div>
</div>

<!-- mobile text -->
<div class="mobile-text">
  <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Consequuntur et quia atque ipsum iure? Autem asperiores error
    repellat assumenda, at perspiciatis veniam culpa consequuntur
    deserunt, quibusdam reiciendis dolorem optio nemo non maxime est
    temporibus dolore!
  </p>
</div>

<!-- post container -->
<div class="post-container">
  <div class="left">
    <div class="date">
      <h5>23</h5>
      <h6>jul</h6>
    </div>
  </div>
  <div class="right">
    <div class="hero"></div>
    <div class="text">
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h6>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consequuntur et quia atque ipsum iure? Autem asperiores error
        repellat assumenda, at perspiciatis veniam culpa consequuntur
        deserunt, quibusdam reiciendis dolorem optio nemo non maxime
        est temporibus dolore!
      </p>
    </div>
  </div>
</div>

<!-- mobile text -->
<div class="mobile-text">
  <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Consequuntur et quia atque ipsum iure? Autem asperiores error
    repellat assumenda, at perspiciatis veniam culpa consequuntur
    deserunt, quibusdam reiciendis dolorem optio nemo non maxime est
    temporibus dolore!
  </p>
</div>
</section>`;
var contactContent = `<section class="contact">
<h1><span>contact</span> us:</h1>
<div class="wrapper">
  <!-- map-address -->
  <div class="left">
    <div class="map">
      <img src="images/map.jpg" alt="Map" />
    </div>
    <div class="address">
      <p>travel-fly Inc.</p>
      <p>8901 Marmora Road</p>
      <p>Glasgow, D04 89GR.</p>
      <p>Freephone: +1 800 559 6580</p>
      <p>Telephone: +1 800 603 6035</p>
      <p>FAX: +1 800 889 9898</p>
      <p>E-mail: mail@travelfly.org</p>
    </div>
  </div>

  <!-- contact form -->
  <div class="right">
    <form>
      <div class="row">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name..."
        />
      </div>
      <div class="row">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address..."
        />
      </div>
      <div class="row">
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company..."
        />
      </div>
      <div class="message">
        <textarea name="message" placeholder="Message..."></textarea>
      </div>
      <div class="send-button">
        <a href="#"><div class="send">send message</div></a>
      </div>
    </form>
  </div>
</div>
</section>`;
var tourIsraelContent = `<div id="israel">
<!-- hero -->
<section class="hero">
  <h1>Israel tour package:</h1>
  <h5>starting from $1000</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/israel/1.jpg" alt="Israel Photo" />
  <img src="images/tours/israel/2.jpg" alt="Israel Photo" />
  <img src="images/tours/israel/3.jpg" alt="Israel Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourUSAContent = `<div id="usa">
<!-- hero -->
<section class="hero">
  <h1>U.S.A tour package:</h1>
  <h5>starting from $1500</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/usa/1.jpg" alt="U.S.A. Photo" />
  <img src="images/tours/usa/2.jpg" alt="U.S.A. Photo" />
  <img src="images/tours/usa/3.jpg" alt="U.S.A Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourAustrailiaContent = `<div id="austrailia">
<!-- hero -->
<section class="hero">
  <h1>Austrailia tour package:</h1>
  <h5>starting from $1800</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/austrailia/1.jpg" alt="Austrailia Photo" />
  <img src="images/tours/austrailia/2.jpg" alt="Austrailia Photo" />
  <img src="images/tours/austrailia/3.jpg" alt="Austrailia Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourNewZealandContent = `<div id="new-zealand">
<!-- hero -->
<section class="hero">
  <h1>New Zealand tour package:</h1>
  <h5>starting from $1200</h5>
</section>

<!-- photos -->
<section class="photos">
  <img
    src="images/tours/new-zealand/1.jpg"
    alt="New Zealand Photo"
  />
  <img
    src="images/tours/new-zealand/2.jpg"
    alt="New Zealand Photo"
  />
  <img
    src="images/tours/new-zealand/3.jpg"
    alt="New Zealand Photo"
  />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourFranceContent = `<div id="france">
<!-- hero -->
<section class="hero">
  <h1>France tour package:</h1>
  <h5>starting from $2500</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/france/1.jpg" alt="France Photo" />
  <img src="images/tours/france/2.jpg" alt="France Photo" />
  <img src="images/tours/france/3.jpg" alt="France Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourEgyptContent = `<div id="egypt">
<!-- hero -->
<section class="hero">
  <h1>Egypt tour package:</h1>
  <h5>starting from $900</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/egypt/1.jpg" alt="Egypt Photo" />
  <img src="images/tours/egypt/2.jpg" alt="Egypt Photo" />
  <img src="images/tours/egypt/3.jpg" alt="Egypt Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourJapanContent = `<div id="japan">
<!-- hero -->
<section class="hero">
  <h1>Japan tour package:</h1>
  <h5>starting from $1300</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/japan/1.jpg" alt="Japan Photo" />
  <img src="images/tours/japan/2.jpg" alt="Japan Photo" />
  <img src="images/tours/japan/3.jpg" alt="Japan Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourCanadaContent = `<div id="canada">
<!-- hero -->
<section class="hero">
  <h1>Canada tour package:</h1>
  <h5>starting from $2000</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/canada/1.jpg" alt="Canada Photo" />
  <img src="images/tours/canada/2.jpg" alt="Canada Photo" />
  <img src="images/tours/canada/3.jpg" alt="Canada Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
var tourUAEContent = `<div id="uae">
<!-- hero -->
<section class="hero">
  <h1>U.A.E tour package:</h1>
  <h5>starting from $3000</h5>
</section>

<!-- photos -->
<section class="photos">
  <img src="images/tours/uae/1.jpg" alt="U.A.E Photo" />
  <img src="images/tours/uae/2.jpg" alt="U.A.E Photo" />
  <img src="images/tours/uae/3.jpg" alt="U.A.E Photo" />
</section>

<!-- itinerary -->
<section class="itinerary">
  <div class="day">
    <h2><span>Day #</span>1:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>2:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>
  <div class="day">
    <h2><span>Day #</span>3:</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      cupiditate voluptatum ratione, labore eius, autem dolorum ab
      suscipit, commodi tempora incidunt. Rem, a tenetur! Temporibus
      sint quam natus possimus esse! Eos maiores iste quisquam!
      Necessitatibus, veniam? Asperiores dignissimos dolor ullam vitae,
      eius in consectetur corrupti. Repudiandae accusantium quisquam
      alias non iusto voluptates dolore quia error commodi, ratione quos
      exercitationem facilis cum labore impedit esse! Sapiente dolorum
      ratione nemo ut fugiat voluptatum fuga odio eum, placeat
      reiciendis explicabo id atque illo facilis beatae ipsa expedita!
      Quas error eligendi ipsa eius, doloremque voluptatem magni
      voluptas praesentium, repellat quis molestias maxime, impedit
      tempora.
    </p>
  </div>

  <!-- book button -->
  <a id="home" href="#booking-form">
    <div class="book">book now</div>
  </a>
</section>
</div>`;
// END html content for #app

// export to change view, page title, and nav color
export function changePageContent(pageID){
    let pageName = pageID + "Content"; 
    $("#app").html(eval(pageName)); // changes content
    let pageTitle = pageID + "Title";
    $("title").html(eval(pageTitle)); // changes title

    // change nav colors based on page view
    if(pageID == "home") {
      $(".header-wrapper .full-size").removeClass("blackBorder");
      $(".header-wrapper .full-size .links a").removeClass("blackText");
      $(".header-wrapper .wordmark").removeClass("blackBorder");
      $(".header-wrapper .wordmark span").removeClass("blackText");
      $(".header-wrapper .full-size .links").removeClass("blackBorder");
    } else {
      $(".header-wrapper .full-size").addClass("blackBorder");
      $(".header-wrapper .full-size .links a").addClass("blackText");
      $(".header-wrapper .wordmark").addClass("blackBorder");
      $(".header-wrapper .wordmark span").addClass("blackText");
      $(".header-wrapper .full-size .links").addClass("blackBorder");
    }
}