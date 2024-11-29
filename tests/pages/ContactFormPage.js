// ContactFormPage.js

class ContactFormPage {
    constructor(page) {
        this.page = page;
        this.nameInput = '#name';
        this.emailInput = '#email';
        this.phoneInput = '#phone';
        this.subjectInput = '#subject';
        this.messageInput = '#description';
        this.submitButton = 'button[type="submit"]';
        this.successMessage = '.contact-form-success';
    }

    /**
     * Переходит на страницу "Contact Us"
     */
    async navigate() {
        await this.page.goto('https://automationintesting.online/#/contact');
    }

    /**
     * Заполняет форму контакта
     * @param {string} name - Имя отправителя
     * @param {string} email - Электронная почта
     * @param {string} phone - Телефонный номер
     * @param {string} subject - Тема сообщения
     * @param {string} message - Сообщение
     */
    async fillContactForm(name, email, phone, subject, message) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.phoneInput, phone);
        await this.page.fill(this.subjectInput, subject);
        await this.page.fill(this.messageInput, message);
    }

    /**
     * Нажимает кнопку отправки формы
     */
    async submitForm() {
        await this.page.click(this.submitButton);
    }

    /**
     * Проверяет успешное отображение сообщения
     * @returns {boolean} - Видимость элемента
     */
    async isFormSubmittedSuccessfully() {
        return await this.page.isVisible(this.successMessage);
    }
}

module.exports = ContactFormPage;
