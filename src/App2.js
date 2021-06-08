import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
const App = () => {
  const [state, setState] = useState({
    fishMass: 25000,
    feedingRatio: 2,
    feedProtein: 28,
    totalWaterVolume: 500,
    estimatedFilterExchangeRate: 2,
    mediaSSA: 500,
    amountOfAirPerM3: 1550,
    protein: 16,
    nitrogen: 16,
    wasteNitrogen: 61,
    NH3: 1.2,
    ammoniaConversationRate: 0.57,
    quantityFeedPerDay: null
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: parseInt(value)
    });
  };

  const tan = () => {
    return (
      state.feedProtein *
      ((state.fishMass * state.feedingRatio) / 100000000) *
      state.nitrogen *
      state.wasteNitrogen *
      state.NH3
    );
  };

  const quantityFeedPerday = () => {
    return (state.fishMass * state.feedingRatio) / 100;
  };

  console.log(state);

  return (
    <>
      <div className="box has-text-centered">
        <h1 className="title is-2">RAS Design</h1> <hr />
        <div className="columns">
          <div className="column">
            <label className="label">Total fish Mass (kg)</label>
            <input
              name="fishMass"
              onChange={(e) => handleChange(e)}
              defaultValue={state.fishMass.toString()}
              className="input is-warning"
            />
            <h6 className="title is-6 ">{state.fishMass / 1000} ton</h6>
          </div>

          <div className="column">
            <label className="label">Protein ratio (%)</label>
            <input
              name="feedProtein"
              onChange={(e) => handleChange(e)}
              defaultValue={state.feedProtein.toString()}
              className="input is-warning"
            />
          </div>

          <div className="column">
            <label className="label">Feeding ratio (%)</label>
            <input
              name="feedingRatio"
              onChange={(e) => handleChange(e)}
              defaultValue={state.feedingRatio.toString()}
              className="input is-warning"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label className="label">Total water volume (m^3)</label>
            <input
              name="totalWaterVolume"
              onChange={(e) => handleChange(e)}
              defaultValue={state.totalWaterVolume.toString()}
              className="input is-warning"
            />
          </div>
          <div className="column">
            <label className="label">
              Estimated filter exchange rate time/hour
            </label>
            <input
              name="estimatedFilterExchangeRate"
              onChange={(e) => handleChange(e)}
              defaultValue={state.estimatedFilterExchangeRate.toString()}
              className="input is-warning"
            />
          </div>
          <div className="column">
            <label className="label">Media SSA (M2)</label>
            <input
              name="mediaSSA"
              onChange={(e) => handleChange(e)}
              defaultValue={state.mediaSSA.toString()}
              className="input is-warning"
            />
          </div>
          <div className="column">
            <label className="label">
              Amount of air per m3 produced by air blower
            </label>
            <input
              name="amountOfAirPerM3"
              onChange={(e) => handleChange(e)}
              defaultValue={state.amountOfAirPerM3.toString()}
              className="input is-warning"
            />
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column  down">
            <label className="label">Quantity feed per day</label>
            <div className="title is-5">
              {quantityFeedPerday()} kg ={quantityFeedPerday() * 1000} g
            </div>
          </div>

          <div className="column down">
            <label className="label">Stocking density (kg/m^2)</label>
            <div className="title is-5">
              {state.fishMass / state.totalWaterVolume}
            </div>
          </div>

          <div className="column  down">
            <label className="label">TAN</label>
            <div className="title is-5">
              {tan()}
              kg ={tan() * 1000}g
            </div>
          </div>

          <div className="column down">
            <label className="label">CO2</label>
            <div className="title is-5">
              {((state.fishMass * state.feedingRatio * 0.25) / 100 +
                (state.fishMass * state.feedingRatio * 0.4) / 100) *
                1.375}
              kg ={' '}
              {((state.fishMass * state.feedingRatio * 0.25) / 100 +
                (state.fishMass * state.feedingRatio * 0.4) / 100) *
                1.375 *
                1000}{' '}
              gm
            </div>
          </div>

          <div className="column down">
            <label className="label">Oxogen required for fish/day</label>
            <div className="title is-5">
              {(state.fishMass * state.feedingRatio * 0.25) / 100} kg =
              {((state.fishMass * state.feedingRatio * 0.25) / 100) * 1000} g
            </div>
          </div>

          <div className="column down">
            <label className="label">Oxogen required for bacteria</label>
            <div className="title is-5">
              {(state.fishMass * state.feedingRatio * 0.4) / 100} kg =
              {((state.fishMass * state.feedingRatio * 0.4) / 100) * 1000} g
            </div>
          </div>
        </div>
        <div className="columns ">
          <div className="column down">
            <label className="label">Solid produced per day</label>
            <div className="title is-5">
              {(state.fishMass * state.feedingRatio * 0.25) / 100} kg =
              {((state.fishMass * state.feedingRatio * 0.25) / 100) * 1000} g
            </div>
          </div>

          {/* this one */}
          <div
            className="column down"
            // style={{ backgroundColor: 'red' }}
          >
            <label className="label">
              Maximum concentration of total ammonia (TAN mg/l)
            </label>
            <div className="title is-5">
              {(
                (tan() * 1000000) /
                (state.totalWaterVolume *
                  1000 *
                  (24 / state.estimatedFilterExchangeRate))
              ).toPrecision(5)}
            </div>
          </div>

          <div className="column down">
            <label className="label">Filter operating surface area (m^2)</label>
            <div className="title is-5">
              {(
                (state.feedProtein *
                  ((state.fishMass * state.feedingRatio) / 100000) *
                  state.nitrogen *
                  state.wasteNitrogen *
                  state.NH3) /
                0.57 /
                1000
              ).toPrecision(6)}
            </div>
          </div>

          <div className="column down">
            <label className="label">Volume of media (m^3)</label>
            <div className="title is-5">
              {(
                (state.feedProtein *
                  ((state.fishMass * state.feedingRatio) / 100000) *
                  state.nitrogen *
                  state.wasteNitrogen *
                  state.NH3) /
                0.57 /
                state.mediaSSA
              ).toPrecision(6)}
            </div>
          </div>

          <div className="column down">
            <label className="label">
              Amount of oxygen produced by blower (g)
            </label>
            <div className="title is-5">{state.amountOfAirPerM3 * 210}</div>
          </div>

          <div className="column down">
            <label className="label">
              Amount of DO in water from blower (g)
            </label>
            <div className="title is-5">
              {state.amountOfAirPerM3 * 210 * 0.03}
            </div>
          </div>
        </div>
      </div>
      <hr /> <br />
    </>
  );
};

export default App;
