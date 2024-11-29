const { test, expect } = require('@playwright/test');
const ContactFormPage = require('./pages/ContactFormPage');

test.describe('UI-тесты для контактной формы', () => {
    test('Успешная отправка данных через UI', async ({ page }) => {
        // Создаем объект страницы
        const contactFormPage = new ContactFormPage(page);

        // Переход на страницу
        await contactFormPage.navigate();

        // Заполнение формы
        await contactFormPage.fillContactForm(
            'Альберт Альберт',
            'alik1892@mail.ru',
            '+79091234567',
            'Test Donteco',
            'Тестовое задание'
        );

        // Отправка формы
        await contactFormPage.submitForm();

        // Проверка успешного сообщения
        const isSubmitted = await contactFormPage.isFormSubmittedSuccessfully();
        expect(isSubmitted).toBeTruthy();
    });
});
