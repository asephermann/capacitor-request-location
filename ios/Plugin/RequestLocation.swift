import Foundation

@objc public class RequestLocation: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
