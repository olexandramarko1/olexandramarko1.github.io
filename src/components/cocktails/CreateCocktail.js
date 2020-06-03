import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addCocktail } from "../../actions/cocktails";
import { getIngredients } from "../../actions/ingredients";

export class Form extends Component {
  state = {
    name: "",
    ingredients: [],
    price: "",
    image: null,
    volume: "",
    alcohol: true,
    custom: true,
    time: 5,
  };
  componentDidMount() {
    this.props.getIngredients();
  }

  fileChangedHandler = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  static propTypes = {
    addCocktail: PropTypes.func.isRequired,
    getIngredients: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      ingredients,
      price,
      image,
      volume,
      alcohol,
      custom,
      time,
    } = this.state;
    const cocktail = {
      name,
      ingredients,
      price,
      image,
      volume,
      alcohol,
      custom,
      time,
    };
    this.props.addCocktail(cocktail);
    this.setState({
      name: "",
      ingredients: ["water"],
      price: "",
      image: null,
      volume: "",
      alcohol: true,
      custom: true,
      time: 5,
    });
  };

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>;
    }
    const { name, volume, ingredients, price } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-4 mb-4">
          <h2>Create cocktail</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Volume</label>
              <input
                className="form-control"
                type="number"
                name="volume"
                onChange={this.onChange}
                value={volume}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                name="price"
                onChange={this.onChange}
                value={price}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cocktails: state.cocktails.cocktails,
  ingredients: state.ingredients.ingredients,
});
export default connect(mapStateToProps, { getIngredients, addCocktail })(Form);
