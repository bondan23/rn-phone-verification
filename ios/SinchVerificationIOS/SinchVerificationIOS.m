#import "SinchVerificationIOS.h"
#import <React/RCTConvert.h>
#import <SinchVerification/SinchVerification.h>

@implementation SinchVerificationIOS

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(sms:(NSString *)applicationKey phoneNumber:(NSString *)phoneNumber custom:(NSString *)custom callback:(RCTResponseSenderBlock)callback) {
    // Get user's current region by carrier info
    NSString* defaultRegion = [SINDeviceRegion currentCountryCode];
    NSError *parseError = nil;
    id<SINPhoneNumber> _phoneNumber = [SINPhoneNumberUtil() parse:phoneNumber
                                                   defaultRegion:defaultRegion
                                                           error:&parseError];
    if (!_phoneNumber){
        callback(@[@"Invalid phone number"]);
    }

    NSString *phoneNumberInE164 = [SINPhoneNumberUtil() formatNumber:_phoneNumber
                                                              format:SINPhoneNumberFormatE164];
    id<SINVerification> verification = [SINVerification SMSVerificationWithApplicationKey:applicationKey
                                                                              phoneNumber:phoneNumberInE164
                                                                                   custom:custom];
    self.verification = verification; // retain the verification instance
    [verification initiateWithCompletionHandler:^(id<SINInitiationResult> result, NSError *error) {
      if (result.success) {
        // Show UI for entering the code which will be received via SMS
        callback(@[[NSNull null]]);
      }else{
        callback(@[error.description]);
      }
    }];
}

RCT_EXPORT_METHOD(verify:(NSString *)code callback:(RCTResponseSenderBlock)callback) {
  [self.verification verifyCode:code
              completionHandler:^(BOOL success, NSError* error) {
                if (success) {
                  callback(@[[NSNull null]]);
                } else {
                  callback(@[error.description]);
                }
              }];
}



@end
