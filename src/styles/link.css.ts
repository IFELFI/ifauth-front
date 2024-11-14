import { style } from "@vanilla-extract/css";
import { theme } from "./theme/contract.css";

export const linkStyle = style({
  display: "block",
  color: theme.text.primary,
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
})

export const buttonStyle = style({
  display: "block",
  color: "white",
  backgroundColor: theme.primary.normal,
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
})