import { ComponentMultiStyleConfig, extendTheme } from "@chakra-ui/react";

const Datepicker: ComponentMultiStyleConfig = {
  parts: [
    "input",
    "icon",
    "placeholder",
    "popContent",
    "popBody",
    "shortcutButtonGroup",
    "shortcutButton",
    "divider",
    "navigationContainer",
    "navigationButton",
    "navigationLabel",
    "calendarContainer",
    "dayLabelContainer",
    "dayLabel",
    "calendarMatrixContainer",
    "calendarMatrixDay",
    "todayButtonGroup",
    "todayButton",
  ],

  baseStyle: ({ colorMode, colorScheme = "blue", theme }) => {
    return {
      input: {
        borderColor: colorMode === "light" ? "gray.300" : "gray.700",
      },

      icon: {
        color: colorMode === "light" ? "gray.300" : "gray.700",
      },

      placeholder: {
        color: colorMode === "light" ? "gray.300" : "gray.700",
      },

      popContent: {
        _focus: {
          outline: "none",
        },
      },

      popBody: {
        shadow: "lg",
      },

      shortcutButtonGroup: {
        marginBottom: 2,
        spacing: 2,
      },

      shortcutButton: {
        fontWeight: "normal",

        _focus: {
          outline: "none",
        },
      },

      divider: {
        marginBottom: 2,
      },

      navigationContainer: {
        alignItems: "baseline",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 2,
      },

      navigationButton: {
        backgroundColor: colorMode === "light" ? "white" : "gray.700",
        borderColor: colorMode === "light" ? "gray.200" : "gray.500",
        borderWidth: 1,
        shadow: "sm",

        _active: {
          shadow: "none",
        },

        _focus: {
          outline: "none",
        },

        _hover: {
          backgroundColor: "unset",
          shadow: "md",
        },
      },

      navigationLabel: {
        fontWeight: "bold",
      },

      calendarContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 2,
      },

      dayLabelContainer: {
        display: "flex",
      },

      dayLabel: {
        alignItems: "center",
        color: colorMode === "light" ? "gray.400" : "gray.500",
        display: "flex",
        fontSize: "sm",
        height: 10,
        justifyContent: "center",
        width: "100%",
      },

      calendarMatrixContainer: {
        display: "flex",
      },

      calendarMatrixDay: {
        alignItems: "center",
        borderRadius: 4,
        display: "flex",
        height: 10,
        justifyContent: "center",
        width: "100%",

        _hover: {
          backgroundColor: "none",
          color: theme.colors[colorScheme][400],
          cursor: "pointer",
        },

        '&[data-in-range="false"]': {
          color: colorMode === "light" ? "gray.400" : "gray.500",
        },

        '&[data-selected="true"]': {
          backgroundColor: theme.colors[colorScheme][400],
          color: colorMode === "light" ? "white" : "gray.700",
          shadow: "md",

          _hover: {
            backgroundColor: "none",
          },

          '&[data-today="true"]': {
            color: colorMode === "light" ? "white" : "gray.700",
          },
        },

        '&[data-today="true"]': {
          borderColor: theme.colors[colorScheme][400],
          borderWidth: 1,
          color: theme.colors[colorScheme][400],
        },

        '&[data-dont-round="true"]': {
          borderRadius: 0,
          backgroundColor: colorMode === "light" ? "gray.200" : "gray.600",
          color: colorMode === "light" ? "gray.700" : "white",
          shadow: "none",
        },

        '&[data-dont-round-left="true"]': {
          borderLeftRadius: 0,
        },

        '&[data-dont-round-right="true"]': {
          borderRightRadius: 0,
        },
      },

      todayButtonGroup: {
        justifyContent: "center",
        spacing: "2",
        variant: "ghost",
        width: "100%",
      },

      todayButton: {
        fontWeight: "normal",

        _focus: {
          outline: "none",
        },
      },
    };
  },

  defaultProps: {
    colorScheme: "blue",
  },
};

export const theme = extendTheme({
  components: { Datepicker },
});
