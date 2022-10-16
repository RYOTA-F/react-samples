import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BalloonTooltip, { TBalloonTooltipPosition } from '.'

describe('BalloonTooltip', () => {
  const defaultProps = {
    position: 'top' as TBalloonTooltipPosition,
    description: 'description',
    children: 'children',
  }

  beforeEach(() => {
    render(<BalloonTooltip {...defaultProps} />)
  })

  test('Children ホバー時に description が表示される', () => {
    const targetElement = screen.getByText(defaultProps.children)
    expect(screen.queryByText(defaultProps.description)).not.toBeInTheDocument()

    fireEvent.mouseEnter(targetElement)
    expect(screen.getByText(defaultProps.description))

    const tooltipElement = screen.getByRole('tooltip')
    fireEvent.mouseLeave(targetElement)
    expect(tooltipElement).not.toBeInTheDocument()
  })

  test('position が top の時のスタイル', () => {
    fireEvent.mouseEnter(screen.getByText(defaultProps.children))
    const tooltipElement = screen.getByRole('tooltip')

    expect(tooltipElement).toHaveStyle(
      'transform: translateX(-50%) translateY(calc(-100% - 22px));'
    )
  })

  test('position が bottom の時のスタイル', () => {
    cleanup()

    const updateProps = {
      ...defaultProps,
      position: 'bottom' as TBalloonTooltipPosition,
    }

    render(<BalloonTooltip {...updateProps} />)
    fireEvent.mouseEnter(screen.getByText(defaultProps.children))
    const tooltipElement = screen.getByRole('tooltip')

    expect(tooltipElement).toHaveStyle('transform: translateX(-50%) translateY(22px);')
  })

  test('position が left の時のスタイル', () => {
    cleanup()

    const updateProps = {
      ...defaultProps,
      position: 'left' as TBalloonTooltipPosition,
    }

    render(<BalloonTooltip {...updateProps} />)
    fireEvent.mouseEnter(screen.getByText(defaultProps.children))
    const tooltipElement = screen.getByRole('tooltip')

    expect(tooltipElement).toHaveStyle('transform: translateX(calc(100% + 10px)) translateY(-70%);')
  })

  test('right が left の時のスタイル', () => {
    cleanup()

    const updateProps = {
      ...defaultProps,
      position: 'right' as TBalloonTooltipPosition,
    }

    render(<BalloonTooltip {...updateProps} />)
    fireEvent.mouseEnter(screen.getByText(defaultProps.children))
    const tooltipElement = screen.getByRole('tooltip')

    expect(tooltipElement).toHaveStyle(
      'transform: translateX(calc(-100% - 10px)) translateY(-75%);'
    )
  })
})
