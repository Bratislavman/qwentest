/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the main heading', () => {
    cy.contains('Демонстрация возможностей Vue 3').should('be.visible')
  })

  it('should navigate to users page', () => {
    cy.contains('Пользователи').click()
    cy.url().should('include', '/users')
    cy.contains('Пользователи (TanStack Query)').should('be.visible')
  })

  it('should navigate to form page', () => {
    cy.contains('Форма').click()
    cy.url().should('include', '/form')
    cy.contains('Форма (Vueform)').should('be.visible')
  })

  it('should toggle checkboxes and update count', () => {
    // Начальное состояние
    cy.get('[data-cy="selected-count"]').first().should('contain.text', 'Выбрано: 0')

    // Кликаем первый чекбокс
    cy.get('[data-cy="checkbox-1"]').check({ force: true })

    // Проверяем, что счётчик обновился
    cy.get('[data-cy="selected-count"]').first().should('contain.text', 'Выбрано: 1')

    // Кликаем второй чекбокс
    cy.get('[data-cy="checkbox-2"]').check({ force: true })

    // Проверяем, что счётчик стал 2
    cy.get('[data-cy="selected-count"]').first().should('contain.text', 'Выбрано: 2')
  })

  it('should open and close modal', () => {
    cy.contains('Открыть модальное окно').click()
    cy.contains('Модальное окно').should('be.visible')

    cy.contains('Закрыть').click()
    cy.contains('Модальное окно').should('not.exist')
  })

  it('should count outside clicks', () => {
    cy.get('body').click(10, 10)
    cy.contains('Событий вне: 1').should('be.visible')

    cy.get('body').click(20, 20)
    cy.contains('Событий вне: 2').should('be.visible')
  })
})
