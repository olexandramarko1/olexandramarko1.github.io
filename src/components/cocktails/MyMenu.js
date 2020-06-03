import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCocktails } from "../../actions/cocktails";

import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from "@material-ui/core/";

export class MyMenu extends Component {
  static propTypes = {
    cocktails: PropTypes.array.isRequired,
    getCocktails: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCocktails();
  }
  render() {
    return (
      <Fragment>
        <h1>My menu</h1>
        <div>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {this.props.cocktails.map((cocktail) => (
              <Grid item xs={12} sm={6} md={3} key={cocktail.name}>
                <Card>
                  <CardActionArea>
                    <img
                      src={cocktail.image}
                      className="card-img-top"
                      alt={cocktail.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {cocktail.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {cocktail.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <button className="nav-link btn btn-info btn-sm text-light">
                      Add
                    </button>
                    <button className="nav-link btn btn-primary btn-sm text-light">
                      Order
                    </button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails.cocktails,
});
export default connect(mapStateToProps, { getCocktails })(MyMenu);
