import 'package:multiple_screens/type_cast.dart';

class Hinge {
  int angle;
  int accuracy;

  Hinge._constructor(this.angle, this.accuracy);

  factory Hinge.fromJson(Map<String, dynamic> json) {
    return Hinge._constructor(
        cast<int>(json['angle'], 0),
        cast<int>(json['accuracy'], 0)
    );
  }
}
