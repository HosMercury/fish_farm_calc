import React, { useState } from 'react';
import App2 from './App2';
import 'bulma/css/bulma.min.css';
const App = () => {
  const [state, setState] = useState({
    totalFishMass: 25000,
    totalVolumeOfWater: 500,
    proposedDailyFeed: 1,
    feedingRatio: 4,
    feedProtein: 28,
    nitrogen: 0.16,
    wasteNitrogen: 0.61,
    NH3: 1.2,
    initialWeight: 100000,
    finalWeight: 150000,
    numberOfDays: 14,
    waterTemperature: 25,
    ph: 8,
    f: 0.05,
    tanConcentration: 1.336,
    proposedMass: null,
    averageWeightGain: null,
    averageDailyGain: null,
    specificGrowthRate: null,
    FCR: null,
    feedEffiency: null,
    toxicAmonia: null,
    tan: null,
    proteinEffiency: null
  });

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: parseFloat(value)
    });
  };

  const quantityFeedPerDay = () => {
    return (state.feedingRatio * state.initialWeight) / 100000;
  };

  const fcr = () => {
    return (
      ((quantityFeedPerDay() * state.numberOfDays) /
        (state.finalWeight - state.initialWeight)) *
      1000
    ).toPrecision(5);
  };

  console.log(state);

  return (
    <>
      <div className="box has-text-centered">
        <h1 className="title is-2">Growth Performance</h1> <hr />
        <div className="columns">
          <div className="column">
            <label className="label">Total fish mass (kg)</label>
            <input
              name="totalFishMass"
              onChange={(e) => handleChange(e)}
              defaultValue={state.totalFishMass.toString()}
              className="input is-warning"
            />
            <h6 className="title is-6 ">{state.totalFishMass / 1000} ton</h6>
          </div>
          <div className="column">
            <label className="label">Total volume of water (m^3)</label>
            <input
              name="totalVolumeOfWater"
              onChange={(e) => handleChange(e)}
              defaultValue={state.totalVolumeOfWater}
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
            <h6 className="title is-6 ">daily feed</h6>
          </div>

          <div className="column">
            <label className="label">Protein ratio (%)</label>
            <input
              name="feedProtein"
              onChange={(e) => handleChange(e)}
              className="input is-warning"
              defaultValue={state.feedProtein.toString()}
            />
            <h6 className="title is-6 ">100 g feed</h6>
          </div>
          <div className="column">
            <label className="label">Initial weight</label>
            <input
              name="initialWeight"
              onChange={(e) => handleChange(e)}
              className="input is-warning"
              defaultValue={state.initialWeight.toString()}
            />
            <h6 className="title is-6 ">{state.initialWeight / 1000} kg</h6>
          </div>
          <div className="column">
            <label className="label">Final weight</label>
            <input
              name="finalWeight"
              onChange={(e) => handleChange(e)}
              className="input is-warning"
              defaultValue={state.finalWeight.toString()}
            />
            <h6 className="title is-6 ">{state.finalWeight / 1000} kg</h6>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label className="label">Number of days (rearing time)</label>
            <input
              name="numberOfDays"
              onChange={(e) => handleChange(e)}
              className="input is-warning"
              defaultValue={state.numberOfDays.toString()}
            />
            <h6 className="title is-6 ">day</h6>
          </div>
          {/* <div className="column">
            <label className="label">Water temperature</label>
            <input
              name="waterTemperature"
              onChange={(e) => handleChange(e)}
              defaultValue={state.waterTemperature.toString()}
              className="input is-warning"
            />
          </div> */}
          {/* <div className="column">
            <label className="label">PH</label>
            <input
              name="ph"
              onChange={(e) => handleChange(e)}
              defaultValue={state.ph.toString()}
              className="input is-warning"
            />
          </div> */}
          <div className="column">
            <label className="label">F-Table</label>
            <input
              name="f"
              onChange={(e) => handleChange(e)}
              defaultValue={state.f.toString()}
              className="input is-warning"
            />
          </div>
          <div className="column">
            <label className="label">TAN concentration (mg/l)</label>
            <input
              name="tanConcentration"
              onChange={(e) => handleChange(e)}
              defaultValue={state.tanConcentration.toString()}
              className="input is-warning"
            />
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column down">
            <label className="label">Stocking density (kg/m^3)</label>
            <div className="title is-5">
              {state.totalFishMass / state.totalVolumeOfWater}
            </div>
          </div>
          <div className="column down">
            <label className="label">Quantity feed per day</label>
            <h6 className="title is-5">
              {quantityFeedPerDay()}kg ={quantityFeedPerDay() * 1000} g
            </h6>
          </div>
          <div className="column down">
            <label className="label">Protein intake (kg)</label>
            <div className="title is-5">
              {((state.feedProtein / 100) * quantityFeedPerDay()).toPrecision(
                5
              )}{' '}
              kg =
              {(
                (state.feedProtein / 100) *
                quantityFeedPerDay() *
                1000
              ).toPrecision(5)}{' '}
              g
            </div>
          </div>
          <div className="column down">
            <label className="label">Weight gain</label>
            <div className="title is-5">
              {(state.finalWeight - state.initialWeight) / 1000} kg =
              {state.finalWeight - state.initialWeight} g
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column down">
            <label className="label">Average daily gain (g/day)</label>
            <div className="title is-5">
              {(
                (state.finalWeight - state.initialWeight) /
                state.numberOfDays /
                1000
              ).toPrecision(5)}
              g
            </div>
          </div>
          <div className="column down">
            <label className="label">Specific growth rate</label>
            <div className="title is-5">
              {(
                ((Math.log(state.finalWeight) / Math.log(10) -
                  Math.log(state.initialWeight) / Math.log(10)) /
                  14) *
                100
              ).toPrecision(5)}
            </div>
          </div>
          <div className="column down">
            <label className="label">FCR</label>
            <div className="title is-5">{fcr()}</div>
          </div>

          <div className="column down">
            <label className="label">Protein effiency ratio (PER)</label>
            <div className="title is-5">
              {(
                (state.finalWeight - state.initialWeight) /
                (state.feedProtein *
                  quantityFeedPerDay() *
                  state.numberOfDays) /
                10
              ).toPrecision(5)}
            </div>
          </div>

          <div className="column down">
            <label className="label">Feed effiency</label>
            <div className="title is-5">
              {((1 / fcr()) * 100).toPrecision(5)}
            </div>
          </div>

          <div className="column down">
            <label className="label">Toxic ammonia (mg/l)</label>
            <div className="title is-5">
              {(state.tanConcentration * state.f).toPrecision(3)}
            </div>
          </div>

          {/* <div className="column down">
            <label className="label">Tan</label>
            <div className="title is-5"></div>
          </div> */}
        </div>
      </div>
      <App2 />
    </>
  );
};

export default App;
