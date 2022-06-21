import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext, I18nService } from "nestjs-i18n";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18nService: I18nService

  ) {}


  @Get('/i18n')
  async getHellog(@I18n() i18n: I18nContext) {
    console.log('\x1b[36m%s\x1b[0m', '======================== Debug ========================\n');
    console.log('\x1b[35m%s\x1b[0m', '   = ', this.i18nService.getSupportedLanguages());
    console.log('\x1b[35m%s\x1b[0m', '   = ', i18n);
    console.log('\x1b[36m%s\x1b[0m', '\n=======================================================');
    return await i18n.t('test.day_interval', {
      args: { count: 0 },
    });


  }



@Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
