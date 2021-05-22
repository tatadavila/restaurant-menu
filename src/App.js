import React from "react";
import FooterImg from "./assets/footerLogo.png";

function App() {
  return (
    <>
      <div className="menu">
        <div className="page">
          <div className="left-column">
            <div className="plate-type">
              <span className="title">Appetizers</span>
              <div className="plates">
                <div className="item">
                  <span className="plate">Crispy Chicken Wings</span> | $14.00
                  <br />
                  Plain / Cattleman BBQ / Buffalo Hot
                </div>
                <div className="item">
                  <span className="plate">Tostones</span> | $13.00 <br />3
                  Tostones Layered with Guacamole / Pico De Gallo / Cilantro/
                  Queso Fresco / Jalapeno / Lime
                </div>
                <div className="item">
                  <span className="plate">Smoked Fish Dip</span> | $13.00 <br />
                  Smoked White Fish / Pickled Jalapeno / Lemon Wedge / Flatbread
                  Crackers
                </div>
                <div className="item">
                  <span className="plate">Chicken Fingers</span> | $14.00 <br />
                  Sothern Style Chicken Fingers / Crispy Seasoned Fries
                </div>
                <div className="item">
                  <span className="plate">
                    Pretzel Bites and Jalapeno Queso
                  </span>{" "}
                  | $13.00 <br />
                  Warm Salted Pretzels / Jalapeno Cheddar Cheese Queso
                </div>
              </div>
            </div>

            <div className="plate-type">
              <span className="title">Salads</span>
              <div className="plates">
                <div className="item">
                  <span className="plate">The Wedge</span> | $13.00 <br />
                  Baby Iceberg / Crispy Bacon / Gorgonzola Cheese / Red Onion /
                  Avocado / Tomato / Buttermilk Blue Cheese Dressing
                </div>
                <div className="item">
                  <span className="plate">Southwest Chicken Caesar Salad</span>{" "}
                  | $16.00 <br />
                  Grilled Or Crispy Chicken / Pinto Beans / Corn/ Grated
                  Manchego Cheese / Tomato / Avocado / Cilantro / Crispy
                  Tortilla / Chipotle Dressing
                </div>
                <div className="item">
                  <span className="plate">Caprese Salad</span> | $14.00 <br />
                  Arugula / Vine Ripe Tomato/Buffalo Mozzarella / Torn Basil /
                  Balsamic Vinaigrette
                </div>
                <div className="item">
                  <span className="plate">Greek Salad with Grilled Salmon</span>{" "}
                  | $19.00 <br />
                  Tomato/cucumbers / Bell Peppers / Feta Cheese / Garbanzo Beans
                  / Kalamata Olives/ Red Wine Vinaigrette
                </div>
                <div className="item">
                  <span className="plate">
                    Pretzel Bites and Jalapeno Queso
                  </span>{" "}
                  | $13.00 <br />
                  Warm Salted Pretzels / Jalapeno Cheddar Cheese Queso
                </div>
              </div>
            </div>

            <div className="plate-type">
              <span className="title">Sweet Tooth</span>
              <div className="plates no-grap">
                <div className="item">
                  <span className="plate">Key Lime Pie</span> | $6.00
                </div>
                <div className="item">
                  <span className="plate">Crème Brûlée Cheesecake</span> | $7.00
                </div>
                <div className="item">
                  <span className="plate">Flourless Chocolate Cake</span> |
                  $6.00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page">
          <div className="right-column">
          <div className="plate-type">
            <span className="title">Entrée Menu Category</span>
            <div className="plates">
              <div className="item">
                <span className="plate">Cali Turkey Club</span> | $15.00 <br />
                Oven Roasted Turkey / Jack Cheese / Lettuce / Tomato / Avocado /
                Mayo / Side Of Coleslaw
              </div>
              <div className="item">
                <span className="plate">Margaretta Pizza</span> | $15.00 <br />
                Artisanal Crust / Sliced Tomato / Marinara Sauce / Mozzarella
                Cheese / Torn Basil
              </div>
              <div className="item">
                <span className="plate">Classic Cheese Pizza</span> | $14.00
                <br />
                Add Pepperoni +$2.00
              </div>
              <div className="item">
                <span className="plate">Fish &amp; Chips Sandwich</span> |
                $17.00
                <br />
                Crispy Cod Fish Filet / Tartar Sauce / Kaiser Bun / Cole Slaw /
                Lemon Pepper French Fries
              </div>
              <div className="item">
                <span className="plate">Fish Tacos</span> | $15.00 <br />
                Blackened Or Grilled Catch Of The Day 3 Corn Tortillas /
                Coleslaw / Pico De Gallo / Pickled Jalapeno / Cilantro / Queso
                Fresco / Sriracha Sour Cream / Crispy Corn Strips
              </div>
              <div className="item">
                <span className="plate">Vegan Burger</span> | $18.00 <br />
                Blackened Or Grilled Catch Of The Day 3 Corn Tortillas /
                Coleslaw / Pico De Gallo / Pickled Jalapeno / Cilantro / Queso
                Fresco / Sriracha Sour Cream / Crispy Corn Strips
              </div>
              <div className="item">
                <span className="plate">Portobello Mushroom Burger</span> |
                $17.00 <br />
                Grilled Portobello Mushroom / Sautéed Onion / Lettuce / Tomato /
                Roasted Red Pepper/ Avocado / Brioche Bun / Served With Fries
              </div>
              <div className="item">
                <span className="plate">Classic Burger</span> | $15.00 <br />
                8oz Blended Chuck And Sirloin / Brioche Bun / Lettuce / Tomato /
                Pickles / Crispy Seasoned Fries <br />
                Add Cheese +$1.00 Add Bacon +$3.00
              </div>
            </div>
          </div>
          <div className="plate-type">
            <span className="title">Refreshments</span>
            <span className="annotation">
              Proudly serving La Colombe Coffee and Mighty Leaf Teas
            </span>
            <div className="plates no-grap">
              <div className="item">
                <span className="plate">Soft Drinks</span> | $4.00
              </div>
              <div className="item">
                <span className="plate">Iced Tea</span> | $3.00
              </div>
              <div className="item">
                <span className="plate">Lemonade</span> | $3.00
              </div>
              <div className="item">
                <span className="plate">Fiji Water</span> | $4.00
              </div>
              <div className="item">
                <span className="plate">La Colombe Reg/Decaf</span> | $4.00
              </div>
              <div className="item">
                <span className="plate">Ice Coffee</span> | $4.00
              </div>
              <div className="item">
                <span className="plate">Espresso</span> | $5.00
              </div>
              <div className="item">
                <span className="plate">Cappuccino or Latte</span> | $7.00
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <footer>
        <div className="footer-text">
          All prices are subject to a 20% service charge. For guests with food
          allergies or specific dietary requirements, please ask to speak to a
          Manager. *Consuming raw or undercooked meat, poultry, seafood,
          shellfish and eggs may increase your risk of food borne illness,
          especially those with certain medical conditions.
        </div>
        <img className="footer-img" src={FooterImg} alt="forks and message" />
      </footer>
    </>
  );
}

export default App;
