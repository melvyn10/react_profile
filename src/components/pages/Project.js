import React from "react";

function Project() {
  return (
    <div className="portBody">
      <p>
        Check out a few of the applications I have worked on. Technologies used in the application include: MongoDB Atlas, Heroku MySQL, Node, Express, Handlebars, homemade ORM.
      </p>

      <h5 class="card-header">Featured</h5>

      <div class="card-columns">
        <div class="card bg-light">
           <div class="card-body text-center">

           <h5 class="card-title">Employee Directory</h5>
            <p class="card-text">This application is used as a employee directory with React, Node, Express, Horuku, API to mockaroo and Bootstrap.
            The user will be able to view the non confidentail employee information of their company. They will also be able to sort certain columns and search or filter the column.
            </p>
            <br></br>
            <a href="https://cryptic-temple-31857.herokuapp.com/" class="btn btn-primary">Employee Directory</a>
          </div>
        </div>

        <div class="card bg-light">
           <div class="card-body text-center">

           <h5 class="card-title">Budget Tracker</h5>
            <p class="card-text">This application is used as a Budget tracker with MongoDB, Node, Express, Horuku and MongoDB Atlas. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they will be able to populate the total when brought back online.</p>
            <a href="https://guarded-badlands-93879.herokuapp.com/" class="btn btn-primary">Budget Tracker</a>
          </div>
        </div>

        <div class="card bg-light">
           <div class="card-body text-center">

           <h5 class="card-title">Workout Tracker</h5>    
            <p class="card-text">This application is used as a workout tracker with MongoDB, Node, Express, Horuku and MongoDB Atlas. The applications follows the MVC design pattern; use Node and MONFODB to query and route data in the app. The application is created with a Mongo database with a Mongoose schema and handle routes with Express.</p>
            <a href="https://obscure-hollows-48440.herokuapp.com/" class="btn btn-primary">Workout Tracker</a>
          </div>
        </div>

        <div class="card bg-light">
           <div class="card-body text-center">

           <h5 class="card-title">Eat-Da-Burger</h5>
            <p class="card-text">Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.</p>
            <br></br>
            <br></br>
            <br></br>
            <a href="https://tranquil-refuge-71130.herokuapp.com/" class="btn btn-primary">Eat-Da-Burger</a>
          </div>
        </div>

        <div class="card bg-light">
           <div class="card-body text-center">

           <h5 class="card-title">Note Taker</h5>
            <p class="card-text">This application can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a href="https://pacific-reef-71002.herokuapp.com/" class="btn btn-primary">Note Taker</a>
          </div>
        </div>        
      </div>
    </div>

  );
}

export default Project;
