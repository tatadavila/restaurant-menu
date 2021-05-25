import React from "react";

const DrinksMenu = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="page">
            <div className="left-column">
              <div className="type">
                <span className="title">SPECIALTY COCKTAILS</span>
                <div className="items-list">
                  <div className="drinks-item">
                    <span className="drink">
                      Ocean Potion <label className="drink-number">11</label>
                    </span>
                    <span className="drink-ingredents">
                      Rasperry vodka, peach schnapps, coconut rum, blue curacao,
                      sprite, orange slices, cherries
                    </span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      Island Mojito <label className="drink-number">12</label>
                    </span>
                    <span className="drink-ingredents">
                      Rum, Fresh mint and agrave &amp; your choice of: <br />*
                      Change it to a sparkling champagne mojito or a coconut,
                      banana, mango
                    </span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      Rising Sun Margarita{" "}
                      <label className="drink-number">12</label>
                    </span>
                    <span className="drink-ingredents">
                      Fresh squeezed lime, reposado tequila, agave nectar, blood
                      orange sour
                    </span>
                    <span className="liquor">Milagros 13 or Patron 14</span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      Funky Monkey <label className="drink-number">13</label>
                    </span>
                    <span className="drink-ingredents">
                      Dark rum, coconut rum, banana rum, banana liqueur,
                      pinneaple juice, orange juice, &amp; a splash of
                      pomegranite liqueur
                    </span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      R<span style={{ textTransform: "lowercase" }}>h</span>umba
                      Rosé <label className="drink-number">11</label>
                    </span>
                    <span className="drink-ingredents">
                      Sparkling rose wine, white rum, agave, pinneaple juice
                      &amp; a squeeze of lime
                    </span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      Tipsy Garden <label className="drink-number">10</label>
                    </span>
                    <span className="drink-ingredents">
                      Cucumber-lime infused vodka, watermelon liqueur, agave
                      &amp; cranberry juice
                    </span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      Mai Tai Dragon <label className="drink-number">13</label>
                    </span>
                    <span className="drink-ingredents">
                      Dark rum, dragon-berry rum, grand marnier, agave, orange
                      juice, pinneaple juice &amp; a splash of pomegranite
                      liqueur
                    </span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      Hollywood Beach Tea{" "}
                      <label className="drink-number">13</label>
                    </span>
                    <span className="drink-ingredents">
                      Vodka, tequila, rum, gin, blue curacao
                    </span>
                    <span className="liquor">Grey goose &amp; Patron 17</span>
                  </div>
                  <div className="drinks-item">
                    <span className="drink">
                      Cruzan Bucket <label className="drink-number">30</label>
                    </span>
                    <span className="br"></span>
                    <div className="sub-drink">Confusion</div>
                    <span className="drink-ingredents">
                      Coconut rum, mango rum, pineapple juice
                    </span>
                    <div className="sub-drink">Bay Breeze</div>
                    <span className="drink-ingredents">
                      Aged light rum, mango rum, pineapple juice, cranberry
                      juice
                    </span>
                    <div className="sub-drink">Rum Runner</div>
                    <span className="drink-ingredents">
                      Aged light rum, aged dark rum, banana liqueur, black-berry
                      liqueur, orange juice and a plash of grenadine
                    </span>
                    <span className="red-note">Same day refills 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page">
            <div className="right-column">
              <div className="type">
                <span className="title">FROZEN DRINKS</span>
                <div className="items-list">
                  <div className="drinks-item">
                    <span className="frozen-drinks">Pina Colada 13</span>
                    <span className="liquor">Rum Floater 3</span>
                  </div>
                  <div className="drinks-item">
                    <span className="frozen-drinks">
                      Strawberry Daiquiri 13
                    </span>
                    <span className="liquor">Rum Floater 3</span>
                  </div>
                  <div className="drinks-item">
                    <span className="frozen-drinks">Miami Vice 13</span>
                    <span className="liquor">Rum Floater 3</span>
                  </div>
                  <div className="drinks-item">
                    <span className="frozen-drinks">Mango Daiquiri 13</span>
                    <span className="liquor">Rum Floater 3</span>
                  </div>
                  <div className="drinks-item">
                    <span className="frozen-drinks">Margarita 13</span>
                    <span className="liquor">Tequila Floater 3</span>
                  </div>
                </div>
              </div>

              {/* <div className="type">
                <span className="title">BEER</span>
                <div className="beer">
                  
                  <div className="col">
                    <div className="left-column">
                      <span className="underlined-subtitle">Domestic</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="right-column">
                      <span className="underlined-subtitle">Import</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinksMenu;
