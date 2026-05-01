class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {        
        let filteredEmails = emails.map(this.filterEmail)
        const uniqueEmails = new Set(filteredEmails)

        return uniqueEmails.size
    }

    /**
     * @param {string} email
     * @return {string}
     */
    filterEmail(email) {
        const [local, domain] = email.split('@')
        const filteredLocal = local.split('+', 1).at(0).replaceAll('.', '')
        const filteredEmail = `${filteredLocal}@${domain}`

        return filteredEmail
    }
}
