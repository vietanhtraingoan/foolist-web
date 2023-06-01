import React, { Component } from "react";
import Image from "next/image";

import { projectMocks } from "../../mocks/projectMocks";

const classNamePrefix = "circle-project-slider";

export class CircleProjectSlider extends Component {
  state = {
    carouselDeg: 90,
    itemDeg: 0,
    centerItem: 2,
    prevItem: 7,
    lastItem: 7,
    nextItem: 1,
  };

  getIdItems = (side) => {
    // true = next, false = prev
    const { nextItem, prevItem, lastItem } = this.state;

    if (side) {
      this.setState(
        {
          centerItem: nextItem,
        },
        () => prevNext(this.state.centerItem)
      );
    } else {
      this.setState(
        {
          centerItem: prevItem,
        },
        () => prevNext(this.state.centerItem)
      );
    }

    const prevNext = (itemId) => {
      if (itemId === lastItem) {
        this.setState({
          nextItem: 0,
          prevItem: lastItem - 1,
        });
      } else if (itemId === 0) {
        this.setState({
          prevItem: lastItem,
          nextItem: 1,
        });
      } else {
        this.setState((state) => ({
          nextItem: this.state.centerItem + 1,
          prevItem: this.state.centerItem - 1,
        }));
      }
    };
  };

  next = () => {
    this.getIdItems(true);
    this.setState((state) => ({
      carouselDeg: this.state.carouselDeg - 49.45,
      itemDeg: this.state.itemDeg + 49.45,
    }));
  };

  prev = () => {
    this.getIdItems(false);
    this.setState((state) => ({
      carouselDeg: this.state.carouselDeg + 49.45,
      itemDeg: this.state.itemDeg - 49.45,
    }));
  };

  getCssClass = (id) => {
    const { centerItem, nextItem, prevItem } = this.state;

    if (id === centerItem) {
      return "active";
    } else if (id === nextItem) {
      return "next";
    } else if (id === prevItem) {
      return "prev";
    }
  };

  // 36

  render() {
    return (
      <div className="carousel-wrapper">
        <div>
          <button onClick={this.next}>Next</button>
          <button onClick={this.prev}>Prev</button>
        </div>

        <div
          className="carousel"
          style={{ transform: `rotate(${this.state.carouselDeg}deg)` }}
        >
          {projectMocks.map((item, index) => (
            <div
              className={`item-carousel ${this.getCssClass(index)}`}
              key={item.id}
              style={{ transform: `rotate(${this.state.itemDeg}deg)` }}
            >
              <Image
                className="circle-silder-image"
                src={item.imgUrl}
                alt=""
                width={120}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CircleProjectSlider;
