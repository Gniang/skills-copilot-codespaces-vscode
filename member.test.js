const fs = require('fs');
const Member = require('./member');

describe('Member', () => {
    let member;

    beforeEach(() => {
        member = new Member('John Doe', 25);
    });

    afterEach(() => {
        // 各テストの後にログファイルをクリーンアップします
        fs.unlinkSync('log.txt');
    });

    it('should append log message to file', () => {
        member.executeSkills();

        // ログファイルの内容を読み取ります
        const logContents = fs.readFileSync('log.txt', 'utf8');

        // ログメッセージが正しく追加されたことを検証します
        expect(logContents).toContain('Name: John Doe Age: 25');
    });

    it('should log an error if appendFile fails', () => {
        // appendFile関数をモックしてエラーをシミュレートします
        fs.appendFile = jest.fn((filename, data, callback) => {
            callback(new Error('Failed to append file'));
        });

        // executeSkillsメソッドを呼び出します
        member.executeSkills();

        // エラーがコンソールにログされたことを検証します
        expect(console.log).toHaveBeenCalledWith('Failed to append file');
    });
});
