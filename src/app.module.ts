import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from "nestjs-i18n";
import * as path from "path";

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      // formatter: (template: string, ...args: any[]) => {
      //   console.log('\x1b[36m%s\x1b[0m', '======================== Debug ========================\n');
      //   console.log('\x1b[35m%s\x1b[0m', '  template = ', template);
      //   console.log('\x1b[36m%s\x1b[0m', '\n=======================================================');
      //   return template;
      // },
      resolvers: [
        // { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
