import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import twitter from "../../assets/images/ActiveBets/twitter.png";

const DropdownOptions = ({
  options,
  highlightedIndex,
  selectedIndex,
  eventListeners,
}) => {
  const { onOptionHover, onOptionClick } = eventListeners;
  return (
    <>
      {options.map((el, i) => {
        return (
          <li
            key={i}
            aria-selected={i === selectedIndex}
            data-value={el.value ? el.value : el.name}
            onMouseOver={(e) => {
              onOptionHover(e);
            }}
            onClick={(e) => {
              onOptionClick(e);
            }}
            style={{ "--index": i }}
            className={"option" + (i === highlightedIndex ? " highlight" : "")}
            role="option"
          >
            {el.name}
            {el.img && <img src={el.img} alt="img" />}
          </li>
        );
      })}
    </>
  );
};

const AiDropDownFilterBtn = ({ name, options, style, ...props }) => {
  const optList = useRef();
  const selectElement = useRef();
  const [isActive, setIsActive] = useState(false);

  const defaultIndex = options.findIndex((option) => option.defaultValue) ?? 0;
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const onOptionHover = (e) => {
    const element = e.currentTarget;
    const index = Array.from(optList.current["children"]).findIndex(
      (el) => el === element
    );
    setHighlightedIndex(index);
  };
  const onOptionClick = (e) => {
    const element = e.currentTarget;
    const index = Array.from(optList.current["children"]).findIndex(
      (el) => el === element
    );
    setSelectedIndex(index);
    setIsActive(false);
  };

  let isMouseDown = false;
  const onDropdownMouseDown = () => {
    isMouseDown = true;
  };
  const onDropdownMouseUp = () => {
    isMouseDown = false;
  };
  const onDropdownFocus = (e) => {
    if (isMouseDown) return;
    setIsActive(true);
  };
  const onDropdownBlur = (e) => {
    setIsActive(false);
  };
  const onDropdownClick = () => {
    setIsActive(!isActive);
  };
  const onDropdownKeyDown = (e) => {
    if (!e.key) return;
    if (e.key === "Escape") {
      setIsActive(false);
    }
    if (e.key === "Enter") {
      if (isActive) {
        setSelectedIndex(highlightedIndex);
      }
      setIsActive(!isActive);
    }
    if (e.key === "ArrowUp") {
      if (highlightedIndex === 0) return;
      moveScrollbarToOption(highlightedIndex - 1);
      setHighlightedIndex(highlightedIndex - 1);
    }
    if (e.key === "ArrowDown") {
      if (highlightedIndex === options.length - 1) return;
      moveScrollbarToOption(highlightedIndex + 1);
      setHighlightedIndex(highlightedIndex + 1);
    }
  };

  const getSelectedOptionValue = () => {
    console.log("first", options[selectedIndex].img);
    return options[selectedIndex].value ?? options.selectedIndex.name;
  };

  const getSelectedOptionText = () => {
    return options[selectedIndex].name;
  };

  const moveScrollbarToOption = (index) => {
    // The element offsetHeight is used here instead of fixed values in case the elements get changed through CSS.
    const element = optList.current["children"][index];
    const parentHeight = optList.current["offsetHeight"];
    const optionHeight = element.offsetHeight;
    const topSpacing = Math.min(
      Math.trunc(parentHeight / optionHeight / 2 - 1),
      3
    );
    const scrollOffset = element.offsetTop - element.offsetHeight * topSpacing;
    optList.current["scrollTop"] = scrollOffset;
  };

  useEffect(() => {
    selectElement.current["selectedIndex"] = selectedIndex;
    // In case an onChange event gets passed to the element, we fire a change event as changing selectedIndex doesn't fire it on its own.
    const event = new Event("change", { bubbles: true });
    selectElement.current["dispatchEvent"](event);
  }, [selectedIndex]);

  const select = useMemo(() => {
    return (
      <select
        {...props}
        onChange={props.onChange}
        name={name}
        ref={selectElement}
      >
        {options.map((el, i) => {
          return (
            <option key={i} value={el.value ? el.value : el.name}>
              {el.name}
              {el.img && <img src={el.img} alt="img" />}
            </option>
          );
        })}
      </select>
    );
  }, [selectedIndex]);

  return (
    <>
      <div
        onKeyDown={onDropdownKeyDown}
        onMouseUp={onDropdownMouseUp}
        onFocus={onDropdownFocus}
        onBlur={onDropdownBlur}
        onClick={onDropdownClick}
        onMouseDown={onDropdownMouseDown}
        className={"react-dropdown" + (isActive ? " active" : "")}
        role="listbox"
        tabIndex={0}
        data-value={getSelectedOptionValue()}
        style={style}
        // getSelectedOptionValueImg={getSelectedOptionValueImg()}
      >
        <span className="value">{getSelectedOptionText()}</span>
        <img
          src={options[selectedIndex].img ?? options.selectedIndex.img}
          alt="img"
        />

        <ul
          ref={optList}
          className={"optList" + (isActive ? "" : " hidden")}
          role="presentation"
        >
          <DropdownOptions
            options={options}
            selectedIndex={selectedIndex}
            highlightedIndex={highlightedIndex}
            eventListeners={{ onOptionHover, onOptionClick }}
          />
        </ul>
        {select}
      </div>
    </>
  );
};

export default AiDropDownFilterBtn;
