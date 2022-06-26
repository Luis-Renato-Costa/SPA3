import nodemailer from 'nodemailer';
import { brotliDecompressSync } from 'zlib';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "75bdde06cce525",
      pass: "561058f0044479"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail: ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Luís Renato <luisrenatocosta@uol.com.br>',
            subject,
            html: body,
                
    });

    };
}