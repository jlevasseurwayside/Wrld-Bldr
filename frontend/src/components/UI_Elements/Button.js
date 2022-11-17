import styled, { css } from "styled-components";
import React, { useCallback } from "react";

const Styled = {};

Styled.Button = styled.button``;

export const Button = styled(
  React.memo(
    React.forwardRef(
      (
        {
          children,
          className,
          style,
          disabled,
          busy,
          color,
          id,
          onClick,
          ...restProps
        },
        ref
      ) => {
        const handleClick = useCallback(
          (e) => {
            onClick({ event: e, id, restProps });
          },
          [onClick, id, restProps]
        );
        return (
          <>
            <Styled.Button
              ref={ref}
              className={className}
              style={style}
              color={color}
              disabled={disabled || busy}
              onClick={handleClick}
            >
              {children}
            </Styled.Button>
          </>
        );
      }
    )
  )
)``;

export default Button;
